async function authorization (req, res, next) {
    try {
        console.log('masuk di authorization');

        console.log(req.user,`info user di author`);
        
        next()
        
    } catch (error) {
        throw error
    }
}

module.exports = authorization