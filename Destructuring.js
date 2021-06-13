/*The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack
 values from arrays, or properties from objects, into distinct variables.*/

 let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

let c, d;
({ c, d } = { c: 10, d: 20 });
console.log(c); // 10
console.log(d); // 20

({c, d, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(c); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}