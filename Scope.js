'use strict'
//The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

//Gobal object
let data = 'ramesh';
const location  = 'Mumbai';

function globalscope() {
  console.log(data);
  //console.log(data2);
}

function localScope() {
  let data2 = 'ramesh yadav';
  data ='Azamghar';
 // location = 'Delhi';// const val can not  change 
let  carName = "Volvo"; //In "Strict Mode", undeclared variables are not automatically global.
  console.log(data);
  console.log(data2);
  console.log(location);
  console.log(carName);
}

globalscope();
localScope();


console.log('-----start--------'); 
//
for (let index = 0; index < 10; index++) {
  setTimeout( ()=>{console.log(index)},0)
}

//
for (var index = 0; index < 10; index++) {
  setTimeout( ()=>{console.log(index)},0)
}

console.log('-----End--------'); 

console.log('-----start--------'); 
let i=10;
function check() {
  var i=20;
  console.log(i);
}
console.log(i);
check();