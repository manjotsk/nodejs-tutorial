const express = require('express');

const restApp = express()

restApp.get('/',(request, response)=>{
    response.send('pong')
})

restApp.get('/division',(request, response)=>{
    const query = request.query
    const numerator = +query.numerator
    const denominator = +query.denominator
    if(denominator===0 & denominator ===0){
        // error
        response.send(400)
        return
    }
    response.send(`${numerator/denominator}`)
})

restApp.listen(2000,()=>{
    console.log('connected successfully')
})