// An arrow function expression is a compact alternative to a traditional function expression,
// but is limited and can't be used in all situations.



//Does not have its own bindings to this
color ="Red";

function getcolorbyreg()
{
   return this.color;
}

const  getcolor =() => { 
    return this.color;
}

var output =getcolor();
console.log(output);

var output1 =getcolorbyreg();
console.log(output1);

//Arrow functions cannot be used as constructors and will throw an error when used with new.
var Foo = () => {};
//var foo = new Foo(); // TypeError: Foo is not a constructor