const express = require('express');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const restApp = express()

restApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

restApp.get('/',(request, response)=>{
    response.send('pong')
})

restApp.get('/division',(request, response)=>{
    const query = request.query
    const numerator = +query.numerator
    const denominator = +query.denominator
    if(numerator===0 & denominator ===0){
        // error
        response.send(
            "<div style=\"background: red;\">meaning of \"</div>"
        )
        return
    }
    response.send(`<h1 style="color:red;"> ${numerator/denominator}</h1>`)
})

restApp.get('/abc',(request, response)=>{

    const data = fs.readFileSync('abc.html')


    response.send(data.toString())
})

restApp.listen(2000,()=>{
    console.log('connected successfully')
})

// \" means " in javascript
