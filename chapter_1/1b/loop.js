var button = document.querySelector('button');

button.addEventListener('click', loop);

function loop() {
  for (var i = 0; i < 1000; i++) {
    dosetTimeout()
  }
}

function dosetTimeout() {
    setTimeout (function() {
        for (var i =0; i < 500; i++) {
            console.log('my favourite number is %s', i);}}, 0);
}

