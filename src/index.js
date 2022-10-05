const express = require('express')
const routerConfig = require('./routes/index.routes')
const globalConstants = require('./const/globalConstants')
const errorHandler = require('./middlewares/error')


const configuracionApi= (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
   
}
configuracionRouter = (app)=> {
    app.use('/', routerConfig.rutas_init())
    app.use(errorHandler)
}
const init = () => {

    const app = express()
    configuracionApi(app)
    configuracionRouter(app)

   

   
    app.listen(globalConstants.PORT)
    console.log(`corriendo...` + globalConstants.PORT)   

}

init();

