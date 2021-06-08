// Arrays are used to store multiple values in a single variable

let data = ['1','2','3'];

//reverse
console.log(data.reverse());


//Spread opearator 
let data2 = [...data];

data2.push('4');

console.log(data2);
console.log(data);

// concat
let newobj= data.concat(data2).sort();
console.log( new Set( newobj));

//String to array
let  val ="Ramesh chandra yadav";

let  objConvert = val.split("");
objConvert.forEach(element => {
  console.log(element + "  " + element.toUpperCase() );
});

//findFirstpositivenum

let  input =[-1,3,-2,4,-1,1,-2];

function  findFirstpositivenum(val)
{
if(val!= null)
{
const result = val.filter(word => Math.sign(word) === 1);
console.log(result.sort());
}
}
findFirstpositivenum(input);











