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
console.log('String to array');
let  val ="Ramesh chandra yadav  ".trim();

let  objConvert = val.split("");
objConvert.forEach(element => {
  console.log(element + "  " + element.toUpperCase() );
});
console.log('------filter-- Find  the  positive  Number -----')
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

console.log('------flat---- method that creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth ---')

let  arr =[1,[2,3,[4,[5,6]]],7,[8]] ;
let  newarr =[];
newarr = arr.flat(4);
console.table(newarr);

console.log('create  own function');


var a =[1,2,3];

function mymap(prama,callback)
{
if(prama !=null)
{
return createnewarray(prama);
}
}

function createnewarray(data)
{
    var obj= [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        obj.push(element * 5 );
    }
    //console.log(data);
    return Object.assign([],obj)
}
var mydata =[];

mydata = mymap(a,createnewarray);

console.table(mydata);














