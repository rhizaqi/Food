async function errorHandle(error, req, res, next) {
  console.log(error, `<< error handler`);
  try {
    switch (error.name) {
      case "SequelizeValidationError":
      case "SequelizeUniqueConstraintError":
        res.status(400).json({
          message: error.errors[0].message,
        });
        break;

      case "UserNotFound":
        res.status(404).json({
          message: "You are not registered",
        });
        break;

      case "BadRequest":
        res.status(400).json({
          message: "Please insert your email/password",
        });
        break;

      case "JsonWebTokenError":
        res.status(401).json({
          message: "Invalid Credential",
        });
        break;

      case "InvalidInput":
        res.status(400).json({
          message: "Invalid email or password",
        });
        break;

      default:
        res.status(500).json({
          message: "InternalServerError",
        });
        break;
    }
  } catch (error) {
    // console.log(error,`<< ini error <<`);
    // throw error;
    next(error);
  }
}

module.exports = errorHandle;
