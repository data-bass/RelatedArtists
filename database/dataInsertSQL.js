var pg = require('pg');
var fs = require('fs');

var connectionString = "postgres://MattRodigheri:MattRodigheri@localhost/artists";

var pgClient = new pg.Client(connectionString);

pgClient.connect();

pgClient.query("copy related_artists from '/Users/MattRodigheri/related_artist9.csv' delimiter ',' csv header;", (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  })
