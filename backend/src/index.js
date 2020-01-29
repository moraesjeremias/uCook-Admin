const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://ucook-admin:acmODcgfkr2UBJVH@cluster0-3kb8y.mongodb.net/uCook-Admin?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.use(routes);

app.listen(3434);