const faker = require ('faker');
var jsonfile = require('./../../artists9.json');
const fs = require('fs');

var obj = {
   results: []
};

fs.readFile('./../../artists9.json', 'utf8', function readFileCallback(err, data) {
  if (err){
    console.log(err);
  } else {
    obj = JSON.parse(data);
    for (let i = 9000001; i <= 10000000; i++) {
      let insertCount = 1;
      let uniqueIdArr = [];
      let k = 0;
      while (k < 10) {
        let randomId = Math.floor (Math.random () * Math.floor (1000000));
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
        artist_image: `https://s3.amazonaws.com/spotifyphotos/${i % 39 + 1}.jpg`,
        popularSong: faker.lorem.word(),
        related_artists: uniqueIdArr
      });
    }
    json = JSON.stringify(obj);
    fs.writeFile('./../../artists9.json', json, 'utf8', function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('success');
      }
    });
  }
});
