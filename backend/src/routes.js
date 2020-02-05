const { Router } = require('express');
const ProdControllers = require('./controllers/ProdControllers')

const routes = Router();

routes.get('/products', ProdControllers.index);
routes.post('/products', ProdControllers.store);
routes.put('/products/:id', ProdControllers.update);
routes.delete('/products/:id', ProdControllers.destroy);



module.exports = routes;