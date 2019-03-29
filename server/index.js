




const express     = require('express');
const getProducts = require('./getProducts');
const getProduct  = require('./getProduct');

const app = express();

const port = 3131;

app.get('/api/products', getProducts); 
app.get('/api/product/:id', getProduct);


app.listen(port, () => {
    console.log(`Server is lisenting in on port: ${port}`);
})