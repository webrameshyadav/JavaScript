//object 
let  Employee ={Name:'Ramesh'};

//Array of object
let  Employee2 =[{Name:'Ramesh'},{Name:'Ananya'},{Name:'Arnav'}];


//Nested Level
let  Employee3 =[{Name:'Ramesh'},{Name:'Ananya'},{Name:'Arnav'},{Education :[{ degree :'BE'}, {degree :'SSC'},{degree :'Diploma'}] } ];

console.log(Employee3);

//Access the element 
console.log(Employee2[0].Name);


//Both for..in and for..of are looping constructs which are used to iterate over data structures. 
//The only difference between them is the entities they iterate over: 
//for..in iterates over all enumerable property keys of an object. 
//for..of iterates over the values of an iterable object.
for (const key in Employee2) {
  if (Object.hasOwnProperty.call(Employee2, key)) {
    const element = Employee2[key];
    console.log(element);
  }
}

for (const iterator of Employee2) {
  console.log(iterator.Name);
}

let  res ={
a :[1,2,3],
b : {one :1,two :2},
undefined
};

console.log(res.b.one);
