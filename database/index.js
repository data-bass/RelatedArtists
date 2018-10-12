const { Client } = require('pg');

const client = new Client({
  // connectionString: 'postgres://MattRodigheri:MattRodigheri@localhost/artists'
  user: 'power_user',
  host: '18.219.58.118',
  database: 'artists',
  password: '$poweruserpassword',
  port: '5432'
});

client.connect();

const getRelatedArtists = function (id, showArtist) {
  client.query(`select artist_name, listeners, image, song from artists where id in (select related_artist_id from artists inner join related_artists on artists.id = related_artists.artist_id where artists.id = ${id});`, function(err, data) {
    if (err) {
      console.log(err);
      showArtist(err, null);
    } else {
      showArtist(null, data);
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
