const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({message: "Foi, será?"})
});

app.listen(3434);