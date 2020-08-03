const express = require('express')
const UsersController = require('./controllers/UsersController');
const SessionController = require('./controllers/SessionController');
const CustomersController = require('./controllers/CustomersController');
const routes = express.Router();

//Login
routes.post('/sessions', SessionController.create);

// Users
routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);
routes.delete('/users/:id', UsersController.delete);

//Customers
routes.get('/customers', CustomersController.index);
routes.post('/customers', CustomersController.create);
routes.delete('/customers/:id', CustomersController.delete);



module.exports = routes;