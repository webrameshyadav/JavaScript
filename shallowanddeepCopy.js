/*A deep copy means that all of the values of the new variable are copied and disconnected from the original
 variable. A shallow copy means that certain (sub-)values are still connected to the original variable.
 To really understand copying, you have to get into how JavaScript stores values. */

 //Primitive data Type
 let  a =5;
 let b =a ;
 b=6;
 console.log(a);
 console.log(b);

 //Composite data Type , we actually made a shallow copy,This is often times problematic,
 // since we expect the old variable to have the original values, not the changed ones
 console.log("------------");
 let Emp={ name :"Ramesh", Age : 20 };
 let emp2 = Emp;
Emp.name='Ananya';
console.log(Emp);
console.log(emp2);

//Spread operator ->this operator is just great, because it is so short and simple. 
//It ‘spreads’ out all of the values into a new object.
console.log("------------");
let Emp3={ name :"Ramesh", Age : 20 };
//let emp4 = {...Emp3};
let emp4  =Object.assign({}, Emp3)
Emp3.name='Ananya';
console.log(Emp3);
console.log(emp4);

//Pitfall :Nested Objects
console.log("------------");
let Emp5={ name :"Ramesh", Age : 20 ,Education :{ degree :'BE' } };
//let emp4 = {...Emp3};
let emp6  =Object.assign({}, Emp5)
Emp5.Education.degree='SSC';
console.log(Emp5);
console.log(emp6);

//Deep Copy
console.log("------------");
const Emp6= { name :"Ramesh", Age : 20 ,Education :{ degree :'BE' } }
let emp7 = JSON.parse(JSON.stringify(Emp6))
Emp6.Education.degree = 'SSC'
console.log(Emp6) // BE
console.log(emp7) // SSC

