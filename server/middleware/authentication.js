const { verifyToken } = require("../helper/jwt");

async function authentication(req, res, next) {
  try {
    console.log("<<<<<< masuk auth");

    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    console.log(token, `dapat ??`);

    const isiToken = verifyToken(token);

    console.log(isiToken, `iya ??/`);

    req.user = {
      id: isiToken.id,
      name: isiToken.name,
    };

    // { id: 13, name: 'coba', iat: 1729490429 } iya ??/
    next();
  } catch (error) {
    throw error;
  }
}

module.exports = authentication;

// verifyToken
// check isi token
// conditional error token
// conditional role?
