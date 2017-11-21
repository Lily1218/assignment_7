var mic;

function setup() {
  createCanvas(500,500);
  
  mic = new p5.AudioIn();

  mic.start();
}

function draw() {
  background(252,240,241);
  noStroke();
  fill(51,204,204);    
  rect(0,300,500,500);    
  
  var vol = mic.getLevel();
  //ellipse(250,250,vol * 200);
  stroke(51,204,204);    
  bezier(0,300,0,(300-vol * 300),500,(300-vol * 300),500,300);
     
  noStroke();
  fill(255,192,64,150);    
  ellipse(250,(200 + vol * 300),100); 
}