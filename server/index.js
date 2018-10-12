const newrelic = require('newrelic');
const express = require('express');
const app = express();
const db = require('../database/index.js');
const path = require('path');
const cors = require('cors');
const redis = require('redis');
const client = redis.createClient();


app.use (cors ());
app.use (express.static (path.join (__dirname + '/../public')));

app.get(`/artist/:id/relatedArtists`, (req, res) => {
  client.get(req.params.id, (err, data) => {
    if (data) {
      res.send(data);
    } else {
      db.getRelatedArtists (req.params.id, (error, data) => {
        if (error) {
          res.status(503).send(error);
        } else {
          client.setex(req.params.id, 3600, JSON.stringify(data.rows))
          res.send (data.rows);
        }
      });
     }
  });
});

// app.post('/artist', function(req, res) {
//   db.insertRelatedArtist(function(err, data) {
//     if(err) {
//       res.status(500);
//       console.log(err)
//     } else {
//       console.log('successful post');
//     }
//   });
// });
//
// app.put('/artist', function(req, res) {
//   db.updateArtist(function(err, data) {
//     if(err) {
//       res.status(500);
//       console.log(err)
//     } else {
//       console.log('successful put');
//     }
//   });
// });
//
// app.delete('/artist', function(req, res) {
//   db.deleteArtist(function(err, data) {
//     if(err) {
//       res.status(500);
//       console.log(err)
//     } else {
//       console.log('successful delete');
//     }
//   });
// });

app.listen (3002, () => {
  console.log ('listening on port 3002!');
});
