var canvasMain = document.getElementById('canvas');
var ctx = canvasMain.getContext('2d');
var fill = document.getElementById('fill');
var pause = document.getElementById('pause');

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
var downrate = 30;
var downrate2 = Number(downrate * 1000);

var og = 100;
var unlog = "Hello, World!";
var log = Date();

var d1; //"now"
var d2 = Date.parse(localStorage.getItem('unlogls'));
var diff;  // difference in milliseconds
var finaldif = "Hello, World!";

var down = 1;
var before;

var off = true;
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

  pause.style.top = 5 + "px";
  pause.style.left = 255 + "px";

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
    if (off === true) {
      og = Number(localStorage.ogls);
    } else {
      before = localStorage.getItem('ogls');
      og = Math.round(Number(before) - (finaldif / downrate));
    }
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
  ctx.fillText(off, 800, 300);



  //requestAnimationFrame
  requestAnimationFrame(draw, 10);
  requestAnimationFrame(stop, 10);
  requestAnimationFrame(pausefun, 10);
}


setInterval(function () {
  og = og - down;
}, downrate2);

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

function pausefun() {
  if (off === true) {
    down = 0;
    var pause = document.getElementById('pause');
    pause.style.backgroundColor = "#df7599";
  } else {
    down = 1;
    var pause = document.getElementById('pause');
    pause.style.backgroundColor = "#b0e0a8";
  }
}

function fillcl() {
  og = og + 10;
  down = 1;
}

function pausecl() {
  off = !off;
  console.log(off);
}
