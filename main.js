var canvasMain = document.getElementById('canvas');
var ctx = canvasMain.getContext('2d');
var fill = document.getElementById('fill');

function onload() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  test()
}

function onPause() {
  localStorage.ogls = og;
  localStorage.unlogls = new Date();
}

function onResume() {
    test()
}

//variabels
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

var og = 100;
var unlog = "Hello, World!";
var log = Date();

var d1; //"now"
var d2 = Date.parse(localStorage.getItem('unlogls'));
var diff;  // difference in milliseconds
var finaldif = "Hello, World!";

var down = 1;
var before;
// load images



// onlaod runs one time and in the end runs draw() with requestAnimationFrame
function test() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

  // fixed canvas resolution
  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  fill.style.top = 140 + "px";
  fill.style.left = 10 + "px";

  log = Date();

  d1 = new Date(); //"now"
  d2 = localStorage.unlog;
  diff = Math.abs(d1-d2);  // difference in milliseconds
  finaldif = Math.floor(diff / 1000);


  // positions var


  if (localStorage.unlogls) {
    unlog = localStorage.getItem('unlogls');
    d1 = new Date(); //"now"
    d2 = Date.parse(localStorage.getItem('unlogls'));
    diff = Math.abs(d1-d2);  // difference in milliseconds
    finaldif = Math.floor(diff / 1000);
  } else {
    unlog = "First time?";
    finaldif = "Sorry...";
  }

  if (localStorage.ogls) {
    before = localStorage.getItem('ogls');
    og = Math.round(Number(before) - (finaldif / 18));
  } else {
    og = 100;
  }


  draw()
}

// runs after test is finished and has an requestAnimationFrame
function draw() {

  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';


  //drawImage
  ctx.font = "40px Arial";
  ctx.fillText(og + "%", 10, 50);
  ctx.font = "35px Arial";
  ctx.fillText(unlog, 10, 150);
  ctx.fillText(log, 10, 200);
  ctx.fillText(finaldif, 10, 300);



  //requestAnimationFrame
  requestAnimationFrame(draw, 10);
  requestAnimationFrame(stop, 10);
}


setInterval(function () {
  og = og - down;
}, 18000);

function stop() {
  if (og <= 0) {
    down = 0;
    og = 0;
  } else {
    down = 1;
  }
  if (og > 100) {
    og = 100;
  }
}

function fillcl() {
  og = og + 10;
  down = 1;
}
/*function counter() {
    var i = 0;
    var num = 0;
    // This block will be executed 100 times.
    setInterval(function(){
        if (i == 100) clearInterval(this);
        else num = num + 1; text = num;
    }, 1000);
} // End
counter()*/
