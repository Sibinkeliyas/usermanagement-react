const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const userFind = require('../helpers/user_helpers')

const protect = asynchandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
     
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "noteapp1234");  // this noteapp1234 should be in env (but for now it is being added here )
      req.user = await userFind.doFind(req.headers.id)
      next();
    } catch (error) {
      res.status(401).json("TOKEN INVALID");
    }
  }

  if (!token) {
    res.status(401).json(token);
  }
});

module.exports = { protect };
