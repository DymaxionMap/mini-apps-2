const moment = require('moment');

const unixTimeToDate = unixTime => moment.unix(unixTime).format('YYYY-MM-DD');
const dateToUnixTime = date => moment(date).unix();
const daysBetweenDates = (startDate, endDate) => moment(endDate).diff(moment(startDate), 'days');

module.exports = {
  unixTimeToDate,
  dateToUnixTime,
  daysBetweenDates,
};
