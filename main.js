var p1;
var p2;
var level = 1;
var checkpoints = [];
var o = [];
var y;
var seconds = 0
var minutes = 0
var hours = 0
var end;
var t = document.createElement("h5")

function setup() {
    createCanvas(800, 500)
    p1 = new Player(50, 50);
    p2 = new Player(50, 200);
    end = new EndPoint(760, 250)
    y = new CircleBoi(200, 100)
     document.body.appendChild(t)
     
     
     for (var i = 0; i<4; i++) {
       o[i] = new object(350+i*100, random(50, 300));
     }
}
 var time = setInterval(10, goUp)
 
 function goUp() {
 seconds = seconds + 1
 
 }
function draw() {
var t2 = document.getElementById("t")
    background("#ffd395")
    if (seconds<45) {
    seconds = seconds + 1
    }
 else {
    minutes += 1
    seconds = 0
    
    if (minutes>59) {
      hours += 1;
      minutes = 0
   }
 }
    t.innerHTML = "Level: "+level;
   t2.innerHTML = hours + ":" + minutes+":"+seconds;
    p1.move(UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW)
    y.move()
    y.waitFor(p1, p2)
    y.display("#ffdd00");
    p2.move('w', 's', 'a', 'd')
    p1.display("#ff3f15")
    p2.display("#7fd6ff")
    end.waitFor(p1, p2)
    end.display("#40a2ff")
    for (var i=0; i<o.length; i++) {
    o[i].move()
    o[i].display(0+i*25)
    var c = dist(p1.x, p1.y, o[i].x, o[i].y)
    
    if (c<30) {
      if (p1.xspeed!=0) {
         p1.xspeed /= 5;
      }
      else if (p1.yspeed!=0) {
         p1.yspeed /= 5;
      }
      else {
        if (p1.xspeed!=0) {
         p1.xspeed *= 5;
      }
       if (p1.yspeed!=0) {
         p1.yspeed *= 5;
      }
      }
     }
      var c1 = dist(p2.x, p2.y, o[i].x, o[i].y)
    
    if (c<30) {
      if (p2.xspeed!=0) {
         p2.xspeed /= 5;
      }
      else if (p2.yspeed!=0) {
         p2.yspeed /= 5;
      }
      else {
        if (p2.xspeed!=0) {
         p2.xspeed *= 5;
      }
       if (p2.yspeed!=0) {
         p2.yspeed *= 5;
      }
      }
    }
   }
}
