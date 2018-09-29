var pg = require('pg');
var fs = require('fs');

var connectionString = "postgres://MattRodigheri:MattRodigheri@localhost/test";

var pgClient = new pg.Client(connectionString);

pgClient.connect();

pgClient.query("copy test from '/Users/MattRodigheri/artist0.csv' delimiter ',' csv header;", (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  })
