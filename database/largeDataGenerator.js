const faker = require ('faker');
var jsonfile = require('./artist.json');
const fs = require('fs');

var obj = {
   results: []
};

// let results = [];
for (let i = 1; i <= 100; i++) {
  obj.results.push ({
    id: i,
    artist_name: faker.name.findName(),
    listeners: faker.random.number(),
    artist_image: `https://s3.amazonaws.com/spotifyphotos/${i % 39 + 1}.jpg`,
    popularSong: faker.lorem.word(),
  });
}

// obj.table.push({id: 1, square:2});

var json = JSON.stringify(obj);

fs.writeFile('./artist.json', json, 'utf8', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});



// for (let j = 0; j < results.length; j++) {
//   jsonfile.writeFile('loop.json', "id :" + i + " square :" + i*i);
// }
