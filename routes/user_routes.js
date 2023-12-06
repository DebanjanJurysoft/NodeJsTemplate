const express=require('express')
const { user_controllers } = require('../controllers')
const UserRoutes=express.Router()

UserRoutes.get("/", user_controllers.getUser)


module.exports=UserRoutes;