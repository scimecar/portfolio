
//Swap to other views
let swap; //undefined  


//mouse prop
let d = 20
const amp = 10;

//slider for size comparison
// let slider;
// let g;


let b;
let boxes = [];

//floor and side colliders
let leftWall;
let rightWall;
let floor;
let mouseCircle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

  world.gravity.y = 5;

  floor = new Sprite(width / 2, height-100, width, 10, 's');
  floor.color = 'black';
  floor.stroke = 'white';
  leftWall = new Sprite(-12, windowHeight / 2, 10, windowHeight, 's');
  rightWall = new Sprite(width + 6, windowHeight / 2, 10, windowHeight, 's');
  leftWall.color = 'white';
  leftWall.stroke = 'white';
  rightWall.color = 'white';
  rightWall.stroke = 'white';
  mouseCircle = new Sprite(mouseX, mouseY, d);
  var gap = 25;

  //slider
  // slider = createSlider(0, 100);
  // slider.position(10, 10);
  // slider.size(180);
  // let g = slider.value;
  // console.log(g);

  // for (let i = 0; i < width; i += gap) {
  //   for (let j = 0; j < 125; j += gap) {
  //     let r = random();
  //     if (r < 0.5) {
  //       line(i, j, i + gap, j + gap);
  //     } else {
  //       line(i + gap, j, i, j + gap);
  //     }
  //     console.log(i);
  //   }

  // }


}


function draw() {
  //clear previous
  background(255, 130);

  //slider
  // g = slider.value();
  // background(g);


  //circle @cursor
  mouseCircle.stroke = 230;
  mouseCircle.color = 230;
  mouseCircle.moveTowards(mouse, 0.10);
  mouseCircle.d = sin(d) * amp + 15;
  d += 5;
}

//wait until mouse is moving around center

//fade in button random left/right

//user goes to click on it



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //leftWall
  rightWall.x = windowWidth + 6;
  floor.x = width/2
  floor.w = width;

}

function teachingClick() {


  for (let i = 0; i < 100; i++) {
    b = new Sprite(random(0, width / 3), random(-40, -120), random(5, 20));
    b.stroke = '';
  }


  var t = document.querySelector(".teachingDescription");
  t.style.display = "block";


  var a = document.querySelector(".academicDescription");
  a.style.display = "none";

  var p = document.querySelector(".portfolioDescription");
  p.style.display = "none";


}

function academicClick() {

  for (let i = 0; i < 100; i++) {

    b = new Sprite(random(width / 3, width / 3 * 2), random(-40, -120), random(5,15));
    b.stroke = '';
  }

  var t = document.querySelector(".teachingDescription");
  t.style.display = "none";


  var a = document.querySelector(".academicDescription");
  a.style.display = "block";

  var p = document.querySelector(".portfolioDescription");
  p.style.display = "none";

}

function portfolioClick() {
  // let gap = 50;
  // for (let i = 50; i < 1000; i += gap) {
  // for (let j = 0; j < height / gap; gap) {
  //print(i);

  // b = new Sprite();
  // b.d = 5;
  // b.y = -20;
  // b.x = i;
  // b.collider = "s"
  //   //   b.stroke = "";
  // }
  // }

  for (let i = 0; i < 100; i++) {
    b = new Sprite(random((width / 3)*2, width), random(-40, -120), random(5, 20));
    b.stroke = '';
  }

  var t = document.querySelector(".teachingDescription");
  t.style.display = "none";

  var a = document.querySelector(".academicDescription");
  a.style.display = "none";

  var p = document.querySelector(".portfolioDescription");
  p.style.display = "block";

}
