
console.table('------------')   

console.log('Message no. 1: Sync');

setTimeout(function() {
console.log('Message no. 2: setTimeout');
}, 0);

var promise = new Promise(function(resolve, reject) {
resolve();
});

promise.then(function(resolve) {
console.log('Message no. 3: 1st Promise');
}).then(function(resolve) {
console.log('Message no. 4: 2nd Promise');
});

console.log('Message no. 5: Sync');


//1,5,2,3,4
//1,5,3,4,2

console.table('------------')   

var b = 10;
function test()
{
    console.log(b);
}

console.table('------------')   

for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
    }

    console.table('------------')   
for (let i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
    }

    console.table('------------')   
    for (var i = 0; i < 5; i++) {
        (function(x) {
        setTimeout(function() { console.log(x); },x * 1000 );
        })(i);
        }
        console.table('------------')   
        const a = [1,2,3];

a.push(7);
console.log(a);

console.table('------------')   
console.log(1 + "2" + "2"); //122
console.log(1 + +"2" + "2");//32
console.log(1 + -"1" + "2");//NAN2
console.log(+"1" + "1" + "2");//112
console.log( "A" - "B" + "2");//NAN2
console.log( "A" - "B" + 2);//NAN

console.table('------------'); 
(function(){
    var a = b = 3;
    })();
    console.log(a);
    console.log(b);
    console.table('------------'); 
    const friends = [
        {name: 'Dave', kids: ['Max', 'Jack']},
        {name: 'Max', kids: ['Sam', 'Alex', 'Megan']},
        {name: 'Jordan', kids: ['Mason', 'Cameron', 'Kaylin']}
        ];
        const newarr=[];
        friends.forEach(element => {
        newarr.push(element.kids);
       });
       console.log(newarr.flat(1));
        //["Max", "Jack", "Sam", "Alex", "Megan", "Mason", "Cameron", "Kaylin"]

    console.log( true && false && false) ;   