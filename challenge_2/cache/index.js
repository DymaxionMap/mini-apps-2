const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis);

const client = redis.createClient();
client.on('error', (err) => {
  console.error(err);
});

module.exports = client;
