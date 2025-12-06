var objects = {};
var pause = -1;

// Player X & Y
var px = 0;
var py = 0;
var holding = 0;
var nextHint = 0;
var restarting = false;
const td = 0.25;

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1.0);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}

// const maxMoves = 7;
// var moves = 7;
// const moveCounter = document.getElementById("instruct").innerText = t;
var score = 0;
function cookie (name, val, type) {
  if (type == "number") {
    if (getCookie(name) >= 0) {
      return 0;
    } else {
      console.log("New Cookie");
      setCookie(name, val, 256);
      return 0;
    }
  } else {
    if (typeof getCookie(name) === type) {
      return 0;
    } else {
      console.log("New Cookie");
      setCookie(name, val, 256);
      return 0;
    }
  }
  
}
// cookie("score", 8, "number");
if (getCookie("score") > 0) {
} else {
  console.log("New Cookie");
  setCookie("score", 8, 256);
}
const text = function(t) {
  document.getElementById("instruct").innerText = t;
}
const DisplayScore = function(t) {
  if (t > score) {
    score = t;
    let hc = getCookie("score");
    console.log("hc: " + hc);
    if (t > getCookie("score") || getCookie("score") == false) {
      setCookie("score", t, 256);
      console.log("hc 2: " + hc);
      countr2(t);
      setTimeout(function() {
        scoreShow(t, hc);
        console.log("YAY EEEE 1");
      }, 600);

    } else {
      countr2(t);
      setTimeout(function() {

        scoreShow(t, hc);

        console.log("YAY EEEE 2");
      }, 600);

    }

  }
}
const scoreShow = function(t, hc) {
  let he = document.getElementById("HardEasy");
  he.style.fontSize = "4vw";
  if (t >= 4 && t == hc) {
    document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.5) + "\n highScore:" + Math.round(t * 0.5);
    setTimeout(function() {
      document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.55) + "\n highScore:" + Math.round(t * 0.6);
      setTimeout(function() {
        document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.6) + "\n highScore:" + Math.round(t * 0.7);
        setTimeout(function() {
          document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.65) + "\n highScore:" + Math.round(t * 0.8);
          setTimeout(function() {
            document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.7) + "\n highScore:" + Math.round(t * 0.9);
            setTimeout(function() {
              document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.8) + "\n highScore:" + Math.round(t * 0.9);
              setTimeout(function() {
                document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.9) + "\n highScore:" + Math.round(t * 0.9);
                setTimeout(function() {
                  document.getElementById("HardEasy").innerText = "Score: " + t + "\n highScore:" + t;
                  he.style.fontSize = "3vw";


                }, 100);
              }, 110);
            }, 100);
          }, 100);
        }, 100);
      }, 110);
    }, 100);

  } else if (t >= 4) {

    document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.5) + "\n highScore:" + hc;
    setTimeout(function() {
      document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.6) + "\n highScore:" + hc;
      setTimeout(function() {
        document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.7) + "\n highScore:" + hc;
        setTimeout(function() {
          document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.8) + "\n highScore:" + hc;
          setTimeout(function() {
            document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.9) + "\n highScore:" + hc;
            setTimeout(function() {
              document.getElementById("HardEasy").innerText = "Score: " + t + "\n highScore:" + hc;

            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  } else {
    document.getElementById("HardEasy").innerText = "Score: " + t + "\n highScore:" + hc;
  }
}
// var noSquare = 99999;


var amount = 4;
var width = amount;

const player = document.getElementById("player");
player.style.left = ((px * 10) + width - 0.5) + "vw";
player.style.top = ((py * 10) + width - 0.5) + "vw";

class obj {
  constructor (x, y, w, h, v, name) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.val = v;
    this.name = "" + name;
  }
  go () {
    let element = document.createElement("button");
    if (getCookie(this.name) >=0) {
      this.val = getCookie(this.name)
    } else {
      // cookie(this.name, this.val, "number");
      // if (this.val !=0) this.val = 0;
    }
    
    console.log("this.name: "+ this.name)
    console.log("this.val: "+ this.val)
    element.id = this.name;
    if (this.val == 0) {
       element.innerText = " "
    } else {
       element.innerText = ""+ this.val;
    }
    document.getElementById("mainDiv").appendChild(element);
    element.classList.add("ObjClass");
    // element.classList.add("Class1");
    // element.onclick = test;
    element.style.left = ((this.x * 10) + width) + "vw";
    element.style.top = ((this.y * 10) + width) + "vw";
    // element.style.borderWidth = 0.3 + "vw";
    this.self = element;
  }
  requestPlayer () {

  }
  save () {
    // cookie(this.name, this.val, "number")
    setCookie(this.name, this.val, 128)
  }

}
const test = function() {
  // let element = document.getElementById("" + this.id);
  // element.classList.remove("Class" + objects[this.id].name);
  // objects[this.id].val = objects[this.id].val * -1;
  // element.classList.add("Class" + objects[this.id].val);
  // console.log(objects[this.id].v + " YAY: " + this.id);
}
document.addEventListener('keydown', KeyGo);
function KeyGo(e) {
  console.log(e.code);
  if (e.code == "KeyW" || e.code == "ArrowUp") {
    // console.log("YAY U");
    checkAndGo(px, py - 1, false);
    // player.style.left = ((px * 10) + width - 0.5) + "vw";
    //     player.style.top = ((py * 10) + width - 1.5) + "vw";


  } else if (e.code == "KeyA" || e.code == "ArrowLeft") {
    // console.log("YAY L");
    checkAndGo(px - 1, py, false);
    // player.style.left = ((px * 10) + width - 1.5) + "vw";
    //     player.style.top = ((py * 10) + width - 0.5) + "vw";

  } else if (e.code == "KeyS" || e.code == "ArrowDown") {
    // console.log("YAY D");
    checkAndGo(px, py + 1, false);
    // player.style.left = ((px * 10) + width - 0.5) + "vw";
    //     player.style.top = ((py * 10) + width + 0.5) + "vw";

  } else if (e.code == "KeyD" || e.code == "ArrowRight") {
    // console.log("YAY R");
    checkAndGo(px + 1, py, false);
    // player.style.left = ((px * 10) + width + 0.5) + "vw";
    // player.style.top = ((py * 10) + width - 0.5) + "vw";

  } else if (e.code == "Space" || e.code == "Enter" || e.code == "KeyE") {
    // console.log("YAY S");
    console.log(objects["" + (px + py * width)].val);
    let self = objects["" + (px + py * width)];
    if (holding == 0 && self.val == 0) {
      self.val = 1;
      console.log(self.val);
      self.self.innerHTML = "P & " + self.val;
    } else if (self.val == holding) {
      checkAndGo(px + 1, py, true);

    } else if (holding != 0) {

      // text("You Can Only Place On Empty Squares, Press T To ");
      // self.self.style.backgroundColor = "rgba(255,30,30,1.0)";

      self.val = holding;
      holding = 0;
      self.self.innerHTML = "P & " + self.val;
    }
  } else if (e.code == "KeyR") {
    restart();
  } else if (e.code == "KeyT") {

    holding = 0;
    self.self.innerHTML = "P";

  } else {

  }
  console.log("px:" + px)
  console.log("py:" + py)
  setTimeout(function() {
    player.style.transitionDuration = td + "s";
    player.style.left = ((px * 10) + width - 0.5) + "vw";
    player.style.top = ((py * 10) + width - 0.5) + "vw";
  }, 200);
}
const checkAndGo = function(x, y, go) {
  console.log("px:" + px)
  console.log("py:" + py)
  console.log("px next:" + (x))
  console.log("py next:" + (y))
  console.log("amount:" + amount)
  if (x < amount && x >= 0 && y < amount && y >= 0) {
    if (objects["" + (x + y * width)]) {
      console.log("passed")
      let element = objects["" + (x + y * width)];
      let last = objects["" + (px + py * width)];
      // let eSelf = document.getElementById("" + element.name);
      // let lSelf = document.getElementById("" + last.name);
      console.log("EName: " + element.name);
      ShowAvaliable();
      if (element.val == 0) {
        moved(last, element);
        px = x;
        py = y;
        player.style.transitionDuration = td + "s";
        player.style.left = ((px * 10) + width - 0.5) + "vw";
        player.style.top = ((py * 10) + width - 0.5) + "vw";

      } else if (element.val == holding && go == false) {
        // text("You Combined Two Numbers Togother, You Are Now Holding Nothing Now.  The '&' means the number will not nove when you move.  You can move over it again to pick it up");
        text("you combined a "+(holding/2)+" and "+(holding/2)+" together!  You are not holding it AND it will not move with you.  You can move over it again to pick it up");
        element.val = element.val * 2;
        holding = 0;
        moved(last, element);
        element.self.innerHTML = "P & " + element.val;
        px = x;
        py = y;
        countr(element.val);
        player.style.borderWidth = 0.3 + "vw";
        player.style.transitionDuration = td + "s";
        player.style.left = ((px * 10) + width - 0.5) + "vw";
        player.style.top = ((py * 10) + width - 0.5) + "vw";

      } else if (holding == 0 && element.val > 0) {
        moved(last, element);
        holding = element.val;
        element.val = 0;
        px = x;
        py = y;
        player.style.transitionDuration = td + "s";
        player.style.left = (((x - px) + px * 10) + width - 0.5) + "vw";
        player.style.top = (((y - py) + py * 10) + width - 0.5) + "vw";

        text("You picked up a " + holding + ".  You can walk over another "+holding+" to add them togher OR press space to drop "+holding+" OR press T to DELETE the "+holding+".");
      } else {
        // console.log("things eeeeee");
        player.style.transitionDuration = 0.05 + "s";
        player.style.left = (((x - px) + px * 10) + width - 0.5) + "vw";
        player.style.top = (((y - py) + py * 10) + width - 0.5) + "vw";
      }
      console.log("-------");
    } else {
      console.log("EEEEEEEEEE");
      player.style.transitionDuration = 0.05 + "s";
      player.style.left = (((x - px) / 2 + px * 10) + width - 0.5) + "vw";
      player.style.top = (((y - py) / 2 + py * 10) + width - 0.5) + "vw";
      return false;
    }
  } else {
    console.log("EEEEEEEEEE");
    player.style.transitionDuration = 0.05 + "s";
    player.style.left = (((x - px) / 2 + px * 10) + width - 0.5) + "vw";
    player.style.top = (((y - py) / 2 + py * 10) + width - 0.5) + "vw";
    return false;
  }
}

const moved = function(last, element) {
  // element.self.style.borderWidth = 0.7 + "vw";
  // last.self.style.borderWidth = 0.3 + "vw";
  DisplayScore(element.val);
  if (last.val == 0) {
    // console.log("Thing 0");
    last.self.innerHTML = "";
  } else {
    // console.log("Thing 1");
    last.self.innerHTML = last.val;
  }
  if (holding == 0) {
    if (element.val == 0) {
      // console.log("Thing 2");
      element.self.innerHTML = "P";
    } else {
      // console.log("Thing 3");
      element.self.innerHTML = "P \n " + element.val;
      DisplayScore(element.val);
    }
  } else {
    // console.log("Thing 4");
    element.self.innerHTML = "P \n " + holding;
  }

}

for (let y = 0; y < amount; y++) {
  for (let x = 0; x < amount; x++) {
    console.log("x: " + x)
    console.log("y: " + y)
    let name = x + y * amount
    console.log("name: " + name)
    console.log("")

    objects[name] = new obj(x, y, 2, 2, 0, "" + name);
    objects[name].go();

  }
}

objects["" + (amount - 1.0)].self.innerHTML = "1";
objects["" + (amount - 1.0)].val = "1";

objects["" + (amount) * (amount - 1.0)].self.innerHTML = "1";
objects["" + (amount) * (amount - 1.0)].val = "1";
objects[0].self.innerHTML = "P";


const restart = function() {

  let t = score;
  let hc = getCookie("score");

  restarting = false;
  holding = 0;
  for (let i in objects) {
    let o = objects[i];
    o.val = 0;
    o.self.innerText = " ";
    setCookie(o.name, 0, 100)
    console.log("YAY");

  }
  location.reload();
  px = 0;
  py = 0;
  objects["" + (amount * width)].self.innerHTML = "1";
  objects["" + (amount * width)].val = "1";

  objects["" + (amount)].self.innerHTML = "1";
  objects["" + (amount)].val = "1";
  objects[0].self.innerHTML = "P";
  player.style.left = ((px * 10) + width - 0.5) + "vw";
  player.style.top = ((py * 10) + width - 0.5) + "vw";
  score = 0;
  location.reload();


  // stuff
  if (t >= 4 && t == hc) {
    document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.9) + "\n highScore:" + Math.round(t * 0.5);
    setTimeout(function() {
      document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.8) + "\n highScore:" + Math.round(t * 0.6);
      setTimeout(function() {
        document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.6) + "\n highScore:" + Math.round(t * 0.7);
        setTimeout(function() {
          document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.5) + "\n highScore:" + Math.round(t * 0.8);
          setTimeout(function() {
            document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.4) + "\n highScore:" + Math.round(t * 0.9);
            setTimeout(function() {
              document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.2) + "\n highScore:" + Math.round(t * 0.9);
              setTimeout(function() {
                document.getElementById("HardEasy").innerText = "Score: " + Math.round(t * 0.1) + "\n highScore:" + Math.round(t * 0.9);
                setTimeout(function() {
                  document.getElementById("HardEasy").innerText = "Score: " + 0 + "\n HighScore:" + t;

                }, 200);
              }, 230);
            }, 200);
          }, 200);
        }, 200);
      }, 270);
    }, 350);

  } else {
    document.getElementById("HardEasy").innerText = "Score: " + 0 + "\n HighScore:" + getCookie("score");
  }
  // if (doRestartOnce == false) {
    doRestartOnce = true;
    
  // }
}
var doRestartOnce = false;
var tally = amount
const ShowAvaliable = function() {
  if (restarting == false) {
    for (let i in objects) {
      let obj = objects[i];
      if (obj.val == 0) {
        obj.self.style.backgroundColor = "rgba(173,216,230,0.5)";
      } else {
        if (holding == 0) {
          obj.self.style.backgroundColor = "rgba(173,216,230,0.5)";
          tally++;
        } else if (holding == obj.val) {
          obj.self.style.backgroundColor = "rgba(173,216,230,1.0)";
          tally++;
        } else {
          obj.self.style.backgroundColor = "rgba(173,216,230,0.15)";
        }
      }

    }
    
    
    // if (amount == 0) {
    //   text("Game Over:  \n You are holding a " + holding + ", but there are no more " + holding + "'s left to combine with.  ");
    //   let valu = 0.7;
    //   let thing = {}
    //   thing[0]="G"
    //   for (let i in objects) {
    //     let obj = objects[i];
    //     // obj.self.style.transitionDuration = valu + "s";
    //     obj.self.style.backgroundColor = "rgba(173,10,30,0.1.0)";
    //     // valu = valu * 1.1;
    //   }
    //   // obj.self.style.backgroundColor = "rgba(173,216,230,0.2)";
    //   text("Game Over:   You are holding a " + holding + ", but there were no more " + holding + "'s left to combine with.  REMEMBER: Pressing SPACE when you are NOT holding anything will create more 1's that you can combine.");
    //   restarting = true;
    //   setTimeout( function () {
    //     if (restarting == true) {
    //       restart();

    //     }
    //   }, 2500);
    // }

  }
}


setInterval(() => {
  ShowAvaliable();
  // console.log("oh ok : " + ani2);
  if (ani2 == false) {
    cont2.style.left = ((px * 10) + width * 1.5) + "vw";
    cont2.style.top = ((py * 10) + width * 1.5) + "vw";

  } else {
    // console.log("oh no : " + ani2);
  }
}, 100);


var anim = false;
const cont = document.getElementById("countr");
const countr = function(tVal) {
  if (ani2 != true) {

    // cont.style.left = ((px * 10) + width * 1.5) + "vw";
    // cont.style.top = ((py * 10) + width * 1.5) + "vw";
    cont.style.transitionDuration = 1.0 + "s";
    cont.style.fontSize = "5vw";
    cont.innerHTML = "+" + tVal;

    // cont.classList.remove("hide");
    anim = true;
    setTimeout(function() {
      if (anim == true) {
        cont.style.transitionDuration = 0 + "s";
        cont.style.fontSize = "0vw";
        anim = false;
        // cont.classList.add("hide");
        //   console.log("oh, YAY");
        // } else {
        //   console.log("oh, no");
      }
    }, 600);
  }
}

var ani2 = false;
const cont2 = document.getElementById("countr");
const HardEasy = document.getElementById("HardEasy");
const countr2 = function(tVal) {

  cont2.style.left = "78vw";
  cont2.style.top = "2vw";
  cont2.style.transitionDuration = 0.65 + "s";
  cont2.style.fontSize = "12vw";

  cont2.innerHTML = "+" + tVal;

  // cont.classList.remove("hide");
  ani2 = true;
  HardEasy.style.transitionDuration = "0s";
  setTimeout(function() {
    if (ani2 != false) {
      cont2.style.fontSize = "5vw";
      HardEasy.style.left = "5vw";
      HardEasy.style.top = "0vw";
      HardEasy.style.transitionDuration = "0.2s";
      HardEasy.style.fontSize = "5.5vw";
      // setTimeout( function () {},50);

    }
  }, 300);
  setTimeout(function() {
    // if (ani2 != false) {
    cont2.style.transitionDuration = 0 + "s";
    cont2.style.fontSize = "0vw";
    ani2 = false;
    HardEasy.style.transitionDuration = "0.8s";
    HardEasy.style.fontSize = "4vw";
    HardEasy.style.left = "0vw";
    HardEasy.style.top = "3vw";
  }, 600);
}

setInterval(() => {
  for (let i in objects) {
    objects[i].save ()
  }
  console.log("saved")
}, 5000);