const express = require('express');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const usersRouter = require('./src/routes/users.route');
const restApp = express()

restApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

restApp.use('/users', usersRouter)

restApp.listen(2000,()=>{
    console.log('connected successfully')
})
