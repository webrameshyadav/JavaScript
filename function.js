/*
A function statement loads before any code is executed. This behavior of function statements 
is called hoisting, which allows a function to be used before it is defined. 
-----
A function expression associates a value with a variable, just like any other assignment statement.
*/

// function statement
function foo() {
}

// function expression
const getRectArea = function(width, height) {
    return width * height;
  };
  
  console.log(getRectArea(3, 4));
  // expected output: 12