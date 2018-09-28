const faker = require ('faker');
var jsonfile = require('./../../artist9.json');
const fs = require('fs');

var obj = {
   results: []
};

fs.readFile('./../../artist9.json', 'utf8', function readFileCallback(err, data) {
  if (err){
    console.log(err);
  } else {
    obj = JSON.parse(data);
    for (let i = 9000001; i <= 10000000; i++) {
      let insertCount = 1;
      let uniqueIdArr = [];
      let k = 0;
      let randomId;
      while (k < 10) {
        randomId = Math.floor (Math.random () * Math.floor (1000000));
        if (randomId === i) {
          continue;
        } else {
          k++;
          uniqueIdArr.push(randomId);
        }
      }
      obj.results.push({
        id: i,
        artist_name: faker.name.findName(),
        listeners: faker.random.number(),
        artist_image: `https://loremflickr.com/320/240/alien?lock=${randomId}`,
        popularSong: faker.lorem.word(),
        related_artists: uniqueIdArr
      });
    }
    json = JSON.stringify(obj);
    fs.writeFile('./../../artist9.json', json, 'utf8', function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('success');
      }
    });
  }
});
