const express = require('express')
const { listUsers } = require('../controllers/users.controller')


const usersRouter = express.Router()

// list

usersRouter.get("/",listUsers)

module.exports = usersRouter