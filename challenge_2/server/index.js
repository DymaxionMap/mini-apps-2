const express = require('express');
const bodyParser = require('body-parser');
const { getPrices } = require('./controllers');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/prices', getPrices);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
