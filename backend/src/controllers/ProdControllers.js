const Products = require('../models/Products');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response){
        const product = await Products.find();
        return response.json(product);
    },

    async store(request, response) {
        const { name, brand, price, carbs, category, quantity, img_url } = request.body;

        const catArray = parseStringAsArray(category);
        console.log(catArray);
        const prod = await Products.create({
            name,
            brand,
            price,
            carbs,
            category: catArray,
            quantity,
            img_url,
        });
    
        return response.json(prod)
    },

    async update(request, response) {
        const { id } = request.params;
        const data = request.body;
        if (data.category) {
            data.category = parseStringAsArray(data.category);
          }

        const prodUpdate = await Products.findByIdAndUpdate(id, data, { new: true });
        
        return response.json(prodUpdate)
    },

    async destroy(request, response) {
        const { id } = request.params;
        const findToDelete = await Products.findById(id);
        const result = findToDelete ? {message: `O produto ${findToDelete.name} foi deletado!`} : { message: `O produto não foi encontrado!`};

        if (findToDelete) {
            await Products.findByIdAndDelete(id)
        }

        return response.json(result);
    }
} 