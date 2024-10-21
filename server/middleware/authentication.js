const { verifyToken } = require("../helper/jwt");

async function authentication(req, res, next) {
  try {
    console.log("<<<<<< masuk auth");

    const {authorization} = req.headers
    const token = authorization.split(" ")[1]
    
    console.log(token,`dapat ??`);

    const isiToken = verifyToken(token)

    console.log(isiToken,`iya ??/`);
    
    

    next()
  } catch (error) {
    throw error;
  }
}

module.exports = authentication;

// verifyToken
// check isi token
// conditional error token
// conditional role?
