/*Generator Functions allow you to pause the execution of a function while maintaining any 
variables you may have set within the function - these traits can make them super powerful 
in many scenarios */

function* generatorexample()
{
yield 8;
yield 9;
yield 10;
return 11;

}

const generator = generatorexample(); 

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (const n of generatorexample()) {
    console.log(n);
}