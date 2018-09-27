var express = require ('express');
var app = express ();
var db = require ('../database/index.js');
const path = require ('path');
var cors = require ('cors');

app.use (cors ());
app.use (express.static (path.join (__dirname + '/../public')));

app.get (`/artist/:id/relatedArtists`, (req, res) => {
  db.getRelatedArtists (req.params.id, (error, data) => {
    if (error) {
      res.status (503).send (error);
    } else {
      res.send (data);
    }
  });
});

app.post('/artist', function(req, res) {
  db.insertRelatedArtist(function(err, data) {
    if(err) {
      res.status(500);
      console.log(err)
    } else {
      console.log('successful post');
    }
  });
});
//
// app.put
//
// app.delete

app.listen (3002, () => {
  console.log ('listening on port 3002!');
});
