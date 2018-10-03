const faker = require ('faker');
const fs = require('fs');

// var string = 'id|artist_name|listeners|artist_image|popularSong|related_artists\n';
// var string = 'id,artist_name,listeners,artist_image,popularSong,related_artists\n';
// var string = 'id,artist_name,listeners,image,song\n';
var string = 'id,artist_id,related_artist_id\n';
let k = 0;
let randomId;
let j = 0;

for (let i = 90000001; i <= 100000000; i++) {
  // let uniqueIdArr = [];
  if (k % 10 === 0) {
    j++;
  }
  // while (k < 10) {
    randomId = Math.floor (Math.random () * Math.floor (10000000));
    if (randomId === i) {
      continue;
    } else {
      k++;
      // uniqueIdArr.push(`${randomId}`);
      // uniqueIdArr.push(`""${randomId}""`);
    }
  // }
  // var csvArr = '"[' + uniqueIdArr + ']"';
  // var csvArr = '"' + uniqueIdArr.join(',') + '"';

  string += `${i},${j},${randomId}\n`
  //string += `${i},${faker.name.findName()},${faker.random.number()},https://loremflickr.com/320/240/alien?lock=${randomId},${faker.lorem.word()}\n`
  // string += `${i},${faker.name.findName()},${faker.random.number()},https://loremflickr.com/320/240/alien?lock=${randomId},${faker.lorem.word()},${csvArr}\n`
  // string += `${i}|${faker.name.findName()}|${faker.random.number()}|https://loremflickr.com/320/240/alien?lock=${randomId}|${faker.lorem.word()}|${csvArr}\n`

}

fs.writeFile('./../../related_artist9.csv', string, 'utf8', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});
