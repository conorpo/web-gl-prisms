function setup(){
  createCanvas(1600, 900,WEBGL);
  rectMode(CENTER);
  ma = atan(1/sqrt(2));
  a = 0;
}
function draw(){
  var scale = 600;
  a-=0.02//mouseY/9000;
  ortho();
  rotateX(ma);
  rotateZ(-QUARTER_PI);
  translate(-scale/2+scale/20,-scale/2+scale/20);
  background(175);
  fill(255);
  for(let x=-5;x<6;x++){
    for(let y=-5;y<6;y++){
      var offset = sqrt(pow(x,2)+pow(y,2))/2//0.5+mouseX/400)
      fill(40+200*Math.abs(Math.cos(offset+a)));
      box(scale/13,scale/13,300*Math.cos(offset+a));
      translate(0,scale/11);
    }
    translate(scale/11,-scale);
  }
  /*background(175);
  var scale = 600;
  translate(-scale/2,0);

  for(let i=-5;i<6;i++){
    box(40,50*Math.cos(a+Math.abs(i/3)),40)
    translate(scale/10,0);
  }
  */
}
