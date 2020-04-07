const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['x-auth-token'];

  if(!token) {
    return res.status(401).json({
      msg: 'no token, invalid permissions'
    })
  }

  try {
    const encrypted = jwt.verify(token, process.env.SECRET);
    req.user = encrypted.user;
    next();
  } catch(err) {
    res.status(401).json({ msg: 'invalid token' });
  }

}