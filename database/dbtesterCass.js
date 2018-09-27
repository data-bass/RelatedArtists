var cassandra = require('cassandra-driver');
var assert = require('assert')

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  keyspace: 'test'
});

var results = 5000;
for (var i = 0; i <= results; i++) {
  const query = `INSERT INTO test (id, name) VALUES (?, ?)`;
  const params = [i, i];
  client.execute(query, params, { prepare: true }, function (err) {
    assert.ifError(err);
  });
  if (i === results) {
    console.log('inserted ' + i)
  }
}
