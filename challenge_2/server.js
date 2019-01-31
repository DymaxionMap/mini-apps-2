const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const apiUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json';

app.get('/prices', (req, res) => {
  const { startDate, endDate } = req.query;
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
