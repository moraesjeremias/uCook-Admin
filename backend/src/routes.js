const { Router } = require('express');
const ProdControllers = require('./controllers/ProdControllers')

const routes = Router();

routes.post('/products', ProdControllers.store);



module.exports = routes;