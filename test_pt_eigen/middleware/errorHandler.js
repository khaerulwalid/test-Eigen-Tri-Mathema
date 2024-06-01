const errorHandler = (err, req, res, next) => {
    let message = "Internal Server Error"
    let status = 500

    
        if(err.name === "ErrorBookBorrow") {
            message = err.message
            status = 400
        } else if(err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
                
                message = err.errors.map(el => {
                    return el.message
                })
                
            status = 400
        } else if(err.name === "BookNotFound") {
            message = err.message
            status = 404
        }
    
        res.status(status).json({message})
  }


module.exports = errorHandler