let mysql = require ('mysql');
let connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  // password: 'password',
  database: 'artists',
});

const getRelatedArtists = function (id, showArtist) {
  let sqlQuery =
    `select artist_name, artistid, listeners, artist_image, popularSong from artist where artistid in (select related_artist_id from relatedartists where main_artist_id = (select artistid from artist where artistid =` +
    connection.escape (id) +
    `))`;
  connection.query (sqlQuery, function (error, result) {
    if (error) {
      console.log ('db query error');
      showArtist (error, null);
    } else {
      console.log ('db query success');
      showArtist (null, result);
    }
  });
};

const insertArtist = function (insert) {
  connection.query(`insert into artist (artist_name, artistid, listeners, artist_image, popularSong) values ('test', 102, 102, 'test', 'test');`, function(err, result) {
    if (err) {
      console.log('error posting');
      insert(err, null);
    } else {
      console.log('success posting');
      insert(null, err)
    }
  });
};

const updateArtist = function (insert) {
  connection.query(`update artist set artist_name = 'putArtist' where artistID > 101;`, function(err, result) {
    if (err) {
      console.log('error posting');
      insert(err, null);
    } else {
      console.log('success posting');
      insert(null, err)
    }
  });
};


module.exports.getRelatedArtists = getRelatedArtists;
module.exports.insertArtist = insertArtist;
module.exports.updateArtist = updateArtist;
