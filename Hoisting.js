'use strict'
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//a variable can be used before it has been declared.

//Assign 5 to x
x= 5;

function checkHoisting()
{
  console.log(x);
}

checkHoisting();

//Declare x
var x;