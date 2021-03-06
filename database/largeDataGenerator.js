const faker = require ('faker');
const fs = require('fs');

// var string = 'id|artist_name|listeners|artist_image|popularSong|related_artists\n'; //cassandra
// var string = 'id,artist_name,listeners,artist_image,popularSong,related_artists\n'; //postgres one table
// var string = 'id,artist_name,listeners,image,song\n'; //postgres artists table
var string = 'id,artist_id,related_artist_id\n'; //postgres related_artists table
// let k = 0;
let randomId;
let j = 8000000; //increment by 1 million, starting at 1

for (let i = 80000001; i <= 90000000; i++) { //increment by 10 million
  // let uniqueIdArr = [];
  if (i % 10 === 0) {
    j++;
  }
  randomId = 1 + Math.floor(Math.random() * 10000000);
  // while (k < 10) {
  //   if (randomId === i) {
  //     continue;
  //   } else {
  //     k++;
  //     // uniqueIdArr.push(`${randomId}`);
  //     // uniqueIdArr.push(`""${randomId}""`);
  //   }
  // }
  // var csvArr = '"[' + uniqueIdArr + ']"';
  // var csvArr = '"' + uniqueIdArr.join(',') + '"';

  string += `${i},${j},${randomId}\n` //postgres related_artists table
  // string += `${i},${faker.name.findName()},${faker.random.number()},https://loremflickr.com/320/240/alien?lock=${randomId},${faker.lorem.word()}\n`  //postgres artists table
  // string += `${i},${faker.name.findName()},${faker.random.number()},https://loremflickr.com/320/240/alien?lock=${randomId},${faker.lorem.word()},${csvArr}\n` //postgres one table
  // string += `${i}|${faker.name.findName()}|${faker.random.number()}|https://loremflickr.com/320/240/alien?lock=${randomId}|${faker.lorem.word()}|${csvArr}\n` //cassandra

}

fs.writeFile('./../../related_artist8.csv', string, 'utf8', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});
