const User = require('../models/user');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if(!user) {
    return res.status(400).json({ msg: 'the user does not exist' });
  }

  const correctPassword = await bcrypt.compare(password, user.password);
  if(!correctPassword) {
    return res.status(400).json({ msg: 'incorrect password' });
  }

  const payload = {
    user: {
      id: user._id
    }
  }

  jwt.sign(payload, process.env.SECRET, {
    expiresIn: 3600
  }, (err, token) => {
    if(err) throw err;

    res.json({ token });
  });


}