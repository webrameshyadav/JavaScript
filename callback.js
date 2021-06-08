// A callback is a function passed into another function as an argument to be executed later.
// Callback functions can be synchronous or asynchronous.
function download(url, callback) {
  setTimeout(() => {
      // script to download the picture here
      console.log(`Downloading ${url} ...`);
      // process the picture once it is completed
      callback(url);
  }, 3000);
}

function process(picture) {
  console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
download(url, process);

