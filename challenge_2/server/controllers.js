const axios = require('axios');
const { dateToUnixTime, daysBetweenDates } = require('./helpers/convertDate');

const apiUrl = 'https://min-api.cryptocompare.com/data/histoday';
const toSymbol = 'USD';

const getPrices = (req, res) => {
  // let { startDate, endDate } = req.query;
  // TODO: Hook this back up to the client
  const fromSymbol = 'ETH';
  const startDate = '2018-10-30';
  const endDate = '2018-11-30';
  const endTime = dateToUnixTime(endDate);
  const numDays = daysBetweenDates(startDate, endDate);
  axios.get(`${apiUrl}?fsym=${fromSymbol}&tsym=${toSymbol}&toTs=${endTime}&limit=${numDays}`)
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
