var pg = require('pg');

var connectionString = "postgres://MattRodigheri:MattRodigheri@localhost/test";

var pgClient = new pg.Client(connectionString);

pgClient.connect();
//seperate data generation from data insertion
//store generated data in a document: .txt file? json?

let results = 1000000;
for (let j = 1; j <= results; j++) {
  // connection.query (
    // `INSERT INTO artist (artist_name, listeners, artist_image, popularSong) VALUES("${results[j].artist_name}", "${results[j].listeners}", "${results[j].artist_image}", "${results[j].popularSong}")`,
    var query = pgClient.query(`insert into test (id, entry) values (${j}, ${j})`)
    if (j === results) {
      console.log('inserted ' + j)
    }
    // function (error, result, fields) {
    //   if (error) {
    //     console.log (error);
    //   }
    // }
  // );
}
