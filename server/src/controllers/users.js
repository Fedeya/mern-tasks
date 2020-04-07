const User = require('../models/user');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.addUser = async (req, res) => {
  
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  
  let user = await User.findOne({ email });
  if(user) return res.json({ msg: 'user already exist' });

  user = new User(req.body);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  try {
    await user.save();

    const payload = {
      user: {
        id: user._id
      }
    };

    jwt.sign(payload, process.env.SECRET, {
      expiresIn: 3600
    }, (err, token) => {
      if(err) throw error;
      
      res.json({ token });

    });
  
  } catch(err) {
    res.status(500).json({
      msg: 'there was an error'
    });
  }

}