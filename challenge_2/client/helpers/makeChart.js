import Chart from 'chart.js';
import chartColors from './chartColors';

const makeDatasets = currencies => (
  currencies.map(({ name, closePrices }, index) => ({
    label: name,
    data: closePrices,
    backgroundColor: Object.values(chartColors)[index],
    borderColor: Object.values(chartColors)[index],
    borderWidth: 1,
  }))
);

const makeChart = (ctx, dates, currencies) => {
  const data = {
    labels: dates,
    datasets: makeDatasets(currencies),
  };
  return new Chart(ctx, {
    data,
    type: 'bar',
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Closing price ($)',
          },
        }],
      },
    },
  });
};

export default makeChart;
