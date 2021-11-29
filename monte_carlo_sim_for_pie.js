var in_circle = 0;
var radius = 200;
var w = 400;
var h = 400;
var total_points = 0;

function setup() {
  createCanvas(w, h);
  background(220);
}

function add_points(){
  var x = random(-radius, radius);
  var y = random(-radius, radius);
  
  return [x,y];
}

function chech_points_in_circle(x, y){
  
  return x**2 + y**2 <= radius**2; 
}

function draw() {
  
  noFill();
  translate(w/2, h/2);
  stroke('black');
  
  for ( var i = 0 ; i < 100; i++){
    total_points += 1;
    rectMode(CENTER);
    rect(0, 0, 2 * radius, 2*radius);
    ellipse(0, 0, 2 * radius, 2*radius);

    var points = add_points();
    var x = points[0];
    var y = points[1];

    if( chech_points_in_circle(x,y) ){
      stroke('green')
      in_circle += 1;
    }
    else{
      stroke('red');
    }
    point(x,y);
  }
  var pi = (in_circle / total_points) * 4;
  console.log(pi); 
}
