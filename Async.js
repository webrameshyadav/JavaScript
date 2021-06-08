/*
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise
*/
async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });
    var data = await myPromise;
    console.log(data);
  }

  myDisplay();