const Products = require('../models/Products');

module.exports = {
    async store(request, response) {
        const { name, brand, price, carbs, category, quantity, img_url } = request.body;
              
        const prod = await Products.create({
            name,
            brand,
            price,
            carbs,
            category,
            quantity,
            img_url,
        });
    
        return response.json(prod)
    }
} 