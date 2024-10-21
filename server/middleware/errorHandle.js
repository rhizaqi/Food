async function errorHandle(error, req, res, next) {
    try {
        

        switch (error.name) {
            case "SequelizeValidationError":
                res.status(400).json({
                    message:error.errors[0].message
                })
                break;
        
            default:
                res.status(500).json({
                    message:"InternalServerError"
                })
                break;
        }
    } catch (error) {
        throw error
    }
}

module.exports = errorHandle