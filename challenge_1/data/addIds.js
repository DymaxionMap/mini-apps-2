const path = require('path');
const fs = require('fs');

fs.readFile(path.resolve(__dirname, 'db.json'), (err, contents) => {
  if (err) {
    return console.error(err);
  }
  const data = JSON.parse(contents);
  const events = data.events.map((event, index) => ({ ...event, id: index }));
  const dataWithIds = JSON.stringify({ events });
  return fs.writeFile(path.resolve(__dirname, 'dbWithIds.json'), dataWithIds, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log('Successfully wrote file');
  });
});
