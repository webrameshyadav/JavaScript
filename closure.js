//a closure is a function that references variables in the outer scope from its inner scope. 
//The closure preserves the outer scope inside its inner scope.
// A lexical scope in JavaScript means that a variable defined outside a function can be accessible 
//inside another function defined after the variable declaration. ... So, the greeting() function is accessing the global variable 
//name which is defined before method function add. This is called due to lexical scoping in JavaScript.

let Firstname = 'John';

function greeting(prama) { 
    let message = 'Hi';
    console.log(message + ' '+ Firstname+ ' '+ prama);
}

greeting('Ramesh');