async function uploadSingleFile(req, res, next) {
    try {
        const file = req.file;
        console.log(file.filename);
        if(!file) {
            const error = new Error('No file')
            error.httpStatusCode = 400
            return next(error)
        }
        res.send(file);
    } catch (error) {
        next(error);
    }
}   

module.exports = {
    uploadSingleFile
}