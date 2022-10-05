module.exports = (scheme) => {

  return (req,res,next) => {

    let result = scheme.validate(req.body)  // valida los datos de entrada
    
    if (result.error) {
        
        next(result.error)


    }else {

        next()
    }

    }

}