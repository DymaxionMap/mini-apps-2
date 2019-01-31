const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const apiUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json';
const startDate = '2018-12-01';
const endDate = '2019-01-31';

app.get('/bpi', (req, res) => {
  axios.get(`${apiUrl}?start=${startDate}&end=${endDate}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
