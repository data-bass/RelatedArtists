var pg = require('pg');

var connectionString = "postgres://MattRodigheri:MattRodigheri@localhost/test";

var pgClient = new pg.Client(connectionString);

pgClient.connect();

// let results = 5;
for (let j = 0; j < 1000; j++) {
  // connection.query (
    // `INSERT INTO artist (artist_name, listeners, artist_image, popularSong) VALUES("${results[j].artist_name}", "${results[j].listeners}", "${results[j].artist_image}", "${results[j].popularSong}")`,
    var query = pgClient.query(`insert into test (name) values ('testing${j}')`)
    // function (error, result, fields) {
    //   if (error) {
    //     console.log (error);
    //   }
    // }
  // );
}
