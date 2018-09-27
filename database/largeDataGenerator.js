const faker = require ('faker');
var jsonfile = require('./artist.json');
const fs = require('fs');

var obj = {
   results: []
};

fs.readFile('./artist.json', 'utf8', function readFileCallback(err, data){
  if (err){
    console.log(err);
  } else {
    obj = JSON.parse(data);
    for (let i = 1; i <= 10; i++) {
      obj.results.push ({
        id: i,
        artist_name: faker.name.findName(),
        listeners: faker.random.number(),
        artist_image: `https://s3.amazonaws.com/spotifyphotos/${i % 39 + 1}.jpg`,
        popularSong: faker.lorem.word(),
      });
    }
    json = JSON.stringify(obj);
    fs.writeFile('./artist.json', json, 'utf8', function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('success');
      }
    });
  }
});
