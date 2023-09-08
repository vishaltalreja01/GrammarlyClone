const jwt = require("jsonwebtoken");
const secretKey = "Damnnn";

const verifyToken = (req, res, next) => {
  const authHeader = req.cookies;
  console.log({ authHeader });
  if (!authHeader) {
    res.status(401).send("Invalid token");
    return;
  }
  // const bearer = authHeader.access_token.split(" ");
  const bearer = authHeader.access_token;
  jwt.verify(bearer, secretKey, (err, user) => {
    if (err) {
      res.status(401).send("Invalid Token");
    } else {
      req.user = user;
      console.log({ user });
      next();
    }
  });
};

module.exports = verifyToken;
