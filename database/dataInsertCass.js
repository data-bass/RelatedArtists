var cassandra = require('cassandra-driver');
var assert = require('assert');
var fs = require('fs');

const distance = cassandra.types.distance;

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  pooling: {
      coreConnectionsPerHost: {
        [distance.local]: 3
      }
   },
  keyspace: 'test'
});

var results = 100;

fs.readFile('./../../test.csv', 'utf-8', (err, data) => {
  if (err) throw err;
})

const query = `COPY test FROM './../../test.csv' WITH DELIMITER=',' and header=true`

client.execute(query, { prepare: true }, function (err) {
  assert.ifError(err);
});
