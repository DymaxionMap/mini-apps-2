const axios = require('axios');
const { apiUrl } = require('./config');

const getPrices = (req, res) => {
  const { startDate, endDate } = req.query;
  axios.get(`${apiUrl}?start=${startDate}&end=${endDate}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
};

module.exports = {
  getPrices,
};
