//All JavaScript objects inherit properties and methods from a prototype

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
//add  property
Person.prototype.height ="5.7";

//add function
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

var myFather = new Person();

console.log(myFather.height);
console.log(myFather.name());
