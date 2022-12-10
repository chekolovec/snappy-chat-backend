const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        res.json({ status: false });
        next();
        return;
      }
      const user = await User.findById(decodedToken.id);
      if (user) {
        res.json({ status: true, user });
        next();
        return;
      }
      res.json({ status: false });
      next();
      return;
    });
  } else {
    res.json({ status: false });
    next();
  }
};
