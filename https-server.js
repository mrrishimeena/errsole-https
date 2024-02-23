const https = require('https');

const data = JSON.stringify({
  key: 'value',
  anotherKey: 'anotherValue'
});

const options = {
  hostname: 'api.errsole.com',
  path: '/apps/processes',
  method: 'POST'
};

// Make the request
const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

// Listen for errors
req.on('error', (e) => {
  console.error(e);
});

// Write data to request body
req.write(data);
req.end();
