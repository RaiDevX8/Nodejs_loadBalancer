const express = require('express')
const{getUsers, createUser}= require('../controllers/userController')

const routes = express.Router();
routes.get('/',getUsers);
routes.post('/',createUser);

module.exports =routes;