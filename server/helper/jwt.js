const jwt = require("jsonwebtoken");
const envJWT = process.env.SECRET;

const signToken = (payload) => {
  return jwt.sign(payload, envJWT);
};

const verifyToken = (payload) => {
  return jwt.verify(payload, envJWT);
};

module.exports = {
  signToken,
  verifyToken,
};
