// let mysql = require ('mysql');
// let connection = mysql.createConnection ({
//   host: 'localhost',
//   user: 'root',
//   // password: 'password',
//   database: 'artists',
// });

// const { Pool, Client } = require('pg');
const { Client } = require('pg');
const connectionString = 'postgres://MattRodigheri:MattRodigheri@localhost/artists';

// const pool = new Pool({
//   user: 'MattRodigheri',
//   host: 'localhost',
//   database: 'artists'
// });
//
// pool.query('select * from artists where id = 1', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

const client = new Client({
  connectionString: connectionString
});

client.connect();

const getRelatedArtists = function (id, showArtist) {
  client.query('select * from artists where id = 1', function(err, data) {
    if (err) {
      showArtist(err, null);
      console.log(err);
    } else {
      showArtist(null, data);
      console.log(data);
      client.end();
    }
  });
}

// const getRelatedArtists = function (id, showArtist) {
//   let sqlQuery =
//     `select artist_name, artistid, listeners, artist_image, popularSong from artist where artistid in (select related_artist_id from relatedartists where main_artist_id = (select artistid from artist where artistid =` +
//     connection.escape (id) +
//     `))`;
//   connection.query (sqlQuery, function (error, result) {
//     if (error) {
//       console.log ('db query error');
//       showArtist (error, null);
//     } else {
//       console.log ('db query success');
//       showArtist (null, result);
//     }
//   });
// };

// const insertArtist = function (insert) {
//   connection.query(`insert into artist (artist_name, artistid, listeners, artist_image, popularSong) values ('test', 102, 102, 'test', 'test');`, function(err, result) {
//     if (err) {
//       console.log('error posting');
//       insert(err, null);
//     } else {
//       console.log('success posting');
//       insert(null, err)
//     }
//   });
// };
//
// const updateArtist = function (update) {
//   connection.query(`update artist set artist_name = 'putArtist' where artistID > 101;`, function(err, result) {
//     if (err) {
//       console.log('error updating');
//       update(err, null);
//     } else {
//       console.log('success updating');
//       update(null, err)
//     }
//   });
// };
//
// const deleteArtist = function (remove) {
//   connection.query(`delete from artist where artistID > 101;`, function(err, result) {
//     if (err) {
//       console.log('error deleting');
//       remove(err, null);
//     } else {
//       console.log('success deleting');
//       remove(null, err)
//     }
//   });
// };
//
//
module.exports.getRelatedArtists = getRelatedArtists;
// module.exports.insertArtist = insertArtist;
// module.exports.updateArtist = updateArtist;
// module.exports.deleteArtist = deleteArtist;
