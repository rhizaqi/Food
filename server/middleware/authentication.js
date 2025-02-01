const { verifyToken } = require("../helper/jwt");
const { User } = require("../models/");

async function authentication(req, res, next) {
  try {
    console.log("<<<<<< masuk auth");

    const { authorization } = req.headers;

    if (!authorization) {
      throw {
        name: "Invalid Credential",
      };
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      throw {
        name: "Invalid Credential",
      };
    }
    // console.log(token, `dapat ??`);

    const isiToken = verifyToken(token);
    // console.log(isiToken, `iya ??/`);

    const checkUser = await User.findOne({ where: { id: isiToken.id } });

    if (!checkUser) {
      next(error);
    }

    req.user = {
      id: isiToken.id,
      name: isiToken.name,
      role: isiToken.role,
    };

    //check user dg findOne/findByPk
    // { id: 13, name: 'coba', iat: 1729490429 } iya ??/
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;

// verifyToken
// check isi token
// conditional error token
// conditional role?
