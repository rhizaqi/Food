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

        
      default:
        res.status(500).json({
          message: "InternalServerError",
        });
        break;
    }
  } catch (error) {
    throw error;
  }
}

module.exports = errorHandle;
