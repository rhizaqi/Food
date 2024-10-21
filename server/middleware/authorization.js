async function authorization (req, res, next) {
    try {
        console.log('masuk di authorization');

        next()
        
    } catch (error) {
        throw error
    }
}

module.exports = authorization