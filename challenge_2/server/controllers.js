const axios = require('axios');
const { dateToUnixTime, daysBetweenDates, unixTimeToDate } = require('./helpers/convertDate');

const apiUrl = 'https://min-api.cryptocompare.com/data/histoday';
const toSymbol = 'USD';

const pluck = (array, property) => array.map(item => item[property]);
const formatData = data => ({
  dates: data.map(({ time }) => unixTimeToDate(time)),
  openPrices: pluck(data, 'open'),
  closePrices: pluck(data, 'close'),
  highPrices: pluck(data, 'high'),
  lowPrices: pluck(data, 'low'),
});

const getPrices = (req, res) => {
  const { startDate, endDate } = req.query;
  const fromSymbol = 'BTC';
  const endTime = dateToUnixTime(endDate);
  const numDays = daysBetweenDates(startDate, endDate);
  axios.get(`${apiUrl}?fsym=${fromSymbol}&tsym=${toSymbol}&toTs=${endTime}&limit=${numDays}`)
    .then((response) => {
      const body = response.data;
      const data = body.Data;
      res.send(formatData(data));
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
};

module.exports = {
  getPrices,
};
