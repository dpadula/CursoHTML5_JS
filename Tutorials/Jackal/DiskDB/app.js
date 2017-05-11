var db = require('diskdb');
db = db.connect('mydb', ['fruits']);

// // add a fruit
// var apple = {
// 	name : 'apple',
// 	qty : 3
// };
 
// db.fruits.save(apple);

var fruits = [{
  name: 'pineapple',
  qty: 5
}, {
  name: 'banana',
  qty: 8
}, {
  name: 'pear',
  qty: 1
}]
 
db.fruits.save(fruits);

console.log(db.fruits.find()); // will return all the fruits
console.log(db.fruits.find({name : 'apple'})); // will return all the fruits with name as apple
 
console.log(db.fruits.findOne()); // will return the first fruits
console.log(db.fruits.find({name : 'apple'})); // will return the first fruits with name as apple

var query = {
  name : 'apple'
};
 
var dataToBeUpdate = {
  qty : 5,
};
 
var options = {
   multi: false,
   upsert: false
};
 
var updated = db.fruits.update(query, dataToBeUpdate, options);
console.log(updated); // { updated: 1, inserted: 0 }
 
console.log(db.fruits.findOne({name : 'apple'}));

//Remove	
console.log(db.fruits.remove({name : 'apple'}));

//Get count
console.log(db.fruits.count());