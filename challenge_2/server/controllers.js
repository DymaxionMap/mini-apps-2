const axios = require('axios');
const client = require('../cache');

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
  const { startDate, endDate, symbol: fromSymbol } = req.query;
  const cacheKey = [fromSymbol, startDate, endDate].join(',');
  client.getAsync(cacheKey)
    .then((reply) => {
      if (reply === null) {
        const endTime = dateToUnixTime(endDate);
        const numDays = daysBetweenDates(startDate, endDate);
        axios.get(`${apiUrl}?fsym=${fromSymbol}&tsym=${toSymbol}&toTs=${endTime}&limit=${numDays}`)
          .then((response) => {
            const body = response.data;
            const data = body.Data;
            const formattedData = formatData(data);
            client.set(cacheKey, JSON.stringify(formattedData));
            res.send(formattedData);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(404);
          });
      } else {
        console.log(reply);
        res.send(JSON.parse(reply));
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getPrices,
};
