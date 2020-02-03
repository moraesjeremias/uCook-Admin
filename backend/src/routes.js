const { Router } = require('express');
const Products = require('./models/Products');
const routes = Router();

routes.post('/products', async (request, response) => {
    const { name, brand, price, carbs, category, img_url } = request.body;
    
    // const catArray = category.split(",").map(cat => cat.trim());
    
    const prod = await Products.create({
        name,
        brand,
        price,
        carbs,
        category,
        img_url,
    });

    return response.json(prod)
});



module.exports = routes;