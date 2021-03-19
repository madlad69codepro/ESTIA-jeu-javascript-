class Player {
   constructor(x, y) {
     this.x = x
     this.y = y
     this.r = 10
     this.xspeed = 0
     this.yspeed = 0
     }
     move(k1, k2, k3, k4) {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
        
        this.k1 = k1
        this.k2 = k2
        this.k3 = k3
        this.k4 = k4
        if (keyCode === this.k1) {
           this.yspeed = -5
           this.xspeed = 0
        }
        if (keyCode === this.k2) {
           this.yspeed = 5
           this.xspeed = 0
        }
        if (keyCode === this.k3) {
           this.yspeed = 0
           this.xspeed = -5
        }
        if (keyCode === this.k4) {
           this.yspeed = 0
           this.xspeed = 5
        }
     }
     display(col) {
     this.col = col
     fill(this.col)
     rect(this.x, this.y, this.r*2, this.r*2)
     }
   }
     
class object {
   constructor(x, y) {
     this.x = x
     this.y = y
     this.r = 20
     this.xspeed = 0
     this.yspeed = level
     this.ystop = random(300, 450)
     this.ystop2 = random(10, 50)
     }
     move() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
        
        if (this.y > this.ystop) {
        this.yspeed = -this.yspeed
     }
        if (this.y < this.ystop2) {
        this.yspeed = -this.yspeed
       }
    }
     display(col) {
     this.col = col
     fill(this.col)
     rect(this.x, this.y, this.r*2, this.r*2)
     }
   }
     
class EndPoint {
   constructor(x, y) {
     this.x = x
     this.y = y
     this.r = 40
     }
     
     waitFor(body, body2) {
      var d1 = dist(body.x, body.y, this.x, this.y)
      var d2 = dist(body2.x, body2.y, this.x, this.y)
      
      if (d1<25 && d2<25) {
      level += 1;
      seconds = 0
      minutes = 0
      hours = 0
      checkpoints.push(hours+":"+minutes+":"+seconds);
      
      if (level>10) {
        document.write("Level 1: "+checkpoints[0]+"<br>"+"Level 2: "+checkpoints[1]+"<br>"+"Level 3: "+checkpoints[2]+"<br>"+"Level 4: "+checkpoints[3]+"<br>"+"Level 5: "+checkpoints[4]+"<br>");
     }
  }
     }
     display(col) {
     this.col = col
     fill(this.col)
     ellipse(this.x, this.y, this.r*2, this.r*2)
     }
   }
     
class CircleBoi {
   constructor(x, y) {
     this.x = x
     this.y = y
     this.r = 25+level*5
     this.xspeed = 0;
       this.yspeed = level
     this.ystop = random(300, 450)
     this.ystop2 = random(10, 50)
     }
     move() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
        
        if (this.y > this.ystop) {
        this.yspeed = -this.yspeed
     }
        if (this.y < this.ystop2) {
        this.yspeed = -this.yspeed
       }
    }
     waitFor(body, body2) {
      var d1 = dist(body.x, body.y, this.x, this.y)
      var d2 = dist(body2.x, body2.y, this.x, this.y)
      if (d1<this.r+10) {
          body.x = 30;
      }
      if (d2<this.r+10) {
          body2.x = 30;
      }
     }
     display(col) {
     this.col = col
     fill(this.col)
     ellipse(this.x, this.y, this.r*2, this.r*2)
     }
   }
     
