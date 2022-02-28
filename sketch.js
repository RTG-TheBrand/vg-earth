var full, g;
var img

function setup() {
   createCanvas(windowWidth,windowHeight,WEBGL);
  //img = loadImage("1638933964682.jpg");
  img = loadImage("eartth.jpg");
  
}

function draw() {
  background("yellow");
  full = createButton("fill fit to screen");
  full.position(10,10);
  full.mousePressed(()=>{
      let fs = fullscreen();
    fullscreen(!fs);
    });
  orbitControl(4,4);
  /*push();
  /*rotateZ(mouseX-mouseX,mouseY-mouseY);
  rotateX(mouseX-mouseY);
  rotateY(mouseY-mouseX);*/
  /*texture(img);
  box(80);
  pop();*/
  
   push();
   rotateY(2.9);
  rotateX(0.10);
  translate(8,8,15);
  texture(img);
  shearX(0);
  shearY(0);
  sphere(50,25,25);
  pop();
  
  
}


