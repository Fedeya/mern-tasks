const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.addUser = async (req, res) => {
  
  const { name, email, password } = req.body;
  
  let user = await User.findOne({ email });
  if(user) return res.json({ msg: 'user already exist' });

  user = new User({
    name, 
    email,
    password
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  try {
    await user.save();

    res.json({
      msg: 'user created!'
    });
  
  } catch(err) {
    res.status(400).json({
      msg: 'there was an error'
    });
  }

}