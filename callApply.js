/**
 * The call() method takes arguments separately. The apply() method takes arguments as an array.
 *  The apply() method is very handy if you want to use an array instead of an argument list.
 * 
 */

const person = {
    fullName: function(city,area) {
      return this.firstName + " " + this.lastName + "  from " + city + " " + area;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }

  console.table(person.fullName.call(person1,'Mumbai','Borivali'));

  //console.table(person.fullName.call(person2,'Mumbai','Borivali'));


  //console.table(person.fullName.apply(person1,['Mumbai','Borivali']));

  console.table(person.fullName.apply(person2,['Mumbai','Borivali']));

  let data =person.fullName.bind(person1,['Mumbai','Borivali']);

  console.log(data());