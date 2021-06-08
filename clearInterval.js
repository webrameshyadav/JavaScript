var msg;
function greeting() {
  console.log('Good morning');
}
function start() {
  msg = setInterval(greeting, 3000);

}

function stop() {
    clearInterval(msg);
}

start();

setTimeout(stop,7000);