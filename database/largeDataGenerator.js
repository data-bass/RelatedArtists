const faker = require ('faker');
const fs = require('fs');

var string = 'id,artist_name,listeners,artist_image,popularSong,related_artists\n';

for (let i = 1; i <= 1000000; i++) {
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
      uniqueIdArr.push(`""${randomId}""`);
    }
  }
  var csvArr = '"[' + uniqueIdArr + ']"'
  string += `${i},${faker.name.findName()},${faker.random.number()},https://loremflickr.com/320/240/alien?lock=${randomId},${faker.lorem.word()},${csvArr}\n`
}

fs.writeFile('./../../artist0.csv', string, 'utf8', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});
