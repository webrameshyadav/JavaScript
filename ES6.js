//Symbol
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  let id = Symbol('id');
  person[id] = 140353 ;

  console.log(person.id);
  console.log(person.age);

  ////Ternary operator
  const a = 6;
  console.log(a === 6 ? 'True': 'False');

//The reduce() method reduces the array to a single value.
//The reduce() method executes a provided function for each value of the array (from left-to-right).
//The return value of the function is stored in an accumulator (result/total).

console.log('reduce');
var numbers = [175, 50, 25];

const output =numbers.reduce(myFunc);

function myFunc(total, num) {
  console.log(total +'    '+ num);
  return total - num;
}
console.log(output);
