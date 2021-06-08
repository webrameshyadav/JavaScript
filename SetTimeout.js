
function delay(ms) {
    // Implement this delay function
    setTimeout (function(){console.log("Inside delay"),ms })  
  }

  (function(){
    console.log('Before delay');
     delay(5000);
    console.log("After delay");
  }());

  //Order
  (function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

