var block = document.getElementsByClassName("main");
console.log(block)
// var block = []
var active = true;
var curent = 0;
var totalblock = -1;
for (let el of block) {
  el.style.top = "100%";

  // el.style.transitionDuration = "0.5s";
  // block.push(el)
  totalblock = totalblock + 1;
  // el.style.margin.left = -10 + "%";
}
Width()
var worh;
function Width() {
  if (active != true) { return }
  if (window.innerWidth < window.innerHeight && worh == 1) { return }
  if (window.innerWidth >= window.innerHeight && worh == -1) { return }
  let slides = document.getElementsByClassName("slider");
  if (window.innerWidth < window.innerHeight) {
    worh = 1;
    for (let el of block) {
      // num++
      el.style.width = "100%"
      el.style.height = "49.9%"
      el.style.left = "0%"
      el.style.background.color = "#ff0000"
      
      for (let i = 0; i < slides.length; i++) {
         // Distribute(slides.item(i));
        let slide = slides.item(i);

        slide.classList.remove('sliderH');
    
        slide.classList.add('sliderV');
      }

      // el.style.left = "0%"
      // el.style.top = "0%"

      // if (isEven(num) == true) {
      //   el.style.top = "50%"
      // } else {
      //   el.style.top = "0%"
      // }
    }
    block[curent + 1].style.top = "50%"
  } else {
    worh = -1;
    let num = 0
    for (let i = 0; i < slides.length; i++) {
       // Distribute(slides.item(i));
      let slide = slides.item(i);
 
      slide.classList.remove('sliderV');
  
      slide.classList.add('sliderH');
    }
    for (let el of block) {
      num++
      el.style.height = "100%"
      el.style.width = "49%"
      console.log("isEven: " + isEven(num))
      if (isEven(num) == true) {
        el.style.left = "50%"
      } else {
        el.style.left = "0%"
      }
    }
    block[curent + 1].style.top = "0%"
  }
}
function setBlock(c) {
  Width()
  if (window.innerWidth < window.innerHeight) {
    // let num = 0


    // block[c].style.top = "0%"
    // if (c+1 >= 0 && c+1<= totalblock) {
    //     block[c + 1].style.top = "50%"
    //   }
    if (c >= 0 && c <= totalblock) {
      curent = c
      setPos(c - 3, -1)
      setPos(c - 2, -1)
      setPos(c - 1, -1)
      setPos(c, 0)
      setPos(c + 1, 0.5)
      setPos(c + 2, 1)
      setPos(c + 3, 1)
      //   console.log("set c: "+c)
      //   console.log("curent: "+curent)
      //   console.log("------- 1")
      // } else {
      //   console.log("data 1 failed to set c: "+c)
      //   console.log("curent: "+curent)
      //   console.log("------- 1 fail")
    }


  } else {

    if (c >= 0 && c <= totalblock) {
      // block[c].style.top = (100 * pos) +"%";
      // console.log("data 2")
      curent = c
      setPos(c - 2, -1)
      setPos(c - 1, -1)
      setPos(c, 0)
      setPos(c + 1, 0)

      setPos(c + 2, 1)
      setPos(c + 3, 1)
      // console.log("set c: "+c)
      // console.log("curent: "+curent)
      // console.log("------- 2")
      // } else {
      // console.log("data 1 failed to set c: "+c)
      // console.log("curent: "+curent)
      // console.log("------- 2 fail")
    }
  }

}
console.log(block)
block[0].style.position = "0%"

function setPos(c, pos) {
  if (c >= 0 && c <= totalblock) {
    block[c].style.top = (100 * pos) + "%";
    if (pos < 1 && pos > -1) {
      // console.log("opacity 1: "+pos)
      block[c].style.opacity = 1
    } else {
      // console.log("opacity 0: "+pos)
      block[c].style.opacity = 0
    }
  } else {
    // console.log("data 2")
    // console.log("failed to set c: "+c+" at pos:"+pos)
  }
}

// Initial state
var scrollPos = 0;
function upDown (u) {
  console.log("upDown")
  console.log(u)
  if (u == "up") {
    setBlock(curent - 1)
  } else {
    setBlock(curent + 1)
  }
}

document.addEventListener('keyup', (event) => {
  // console.log(event); 
  // all event related info
  // console.log(event.type);
  // console.log(event.key);
  // console.log(event.code);
  if (event.code == "ArrowDown" 
      // || event.code == "ArrowRight"
     ) {
    setBlock(curent + 1)
  } else if (event.code == "ArrowUp" 
             // || event.code == "ArrowLeft"
            ) {
    setBlock(curent - 1)
  } else if (event.key == "~") {
    setBlock(curent + 1)
    setBlock(curent + 1)
    setBlock(curent + 1)
    setBlock(curent + 1)
    setBlock(curent + 1)
    setBlock(curent + 1)
    setBlock(curent + 1)
    setBlock(curent + 1)
    setBlock(curent + 1)
    setBlock(curent + 1)
  }
});


console.log("totalBlock: " + totalblock)
block[0].style.top = "0%"
function isEven(n) {
  return n % 2 == 0;
}
const body = document.getElementsByTagName("body")[0];


// Initialize resize observer object
let resizeObserver = new ResizeObserver(() => {
  // Set the current height and width
  // to the element
  Width();
});

resizeObserver.observe(body);

var timer = 0;
var lastScrollTop = 0;
var change = 0;

setInterval(function() {
  if (timer > 0) timer--
  if (timer > 30) timer = 29

  
  // if (change > total -1) {
    // console.log("yay")
  // }
  // change = total
}, 20);

var scrollableElement = document.body; //document.getElementById('scrollableElement');

var total = 0;

scrollableElement.addEventListener('wheel', checkScrollDirection);
var timeThing = 2;
function checkScrollDirection(event) {
  // console.log("scroll!")
  timer++
  if (timer < timeThing && $('#img-dContainer').is(":hover") == false && $('#img-sContainer').is(":hover") == false) {
  
    
  if (checkScrollDirectionIsUp(event)) {
    // console.log('UP');
    setBlock(curent - 1)
    // timer = 0
  } else {
    // console.log('Down');
    setBlock(curent + 1)
    // timer = 0
  }
  // return;
  }
  total++
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}



// active scroling or looking at an interactive section
$('body').mousedown(function(e) { if (e.button == 1) return false });
window.addEventListener('keydown', function(e) {
  if (e.key == "Escpe") {
    active = true;
  }
  // document.querySelector('p').innerHTML = `You pressed ${e.key}`;
}, false);

var fn;
// copy and paste buttons
$(".copy").hover(function() {
  let pos = $(this).offset();
  fn = new popup(pos.top, pos.left, "Click To Copy");
}, function() {
  fn.end();
  // $(this).css("background-color", "pink");
});
function popup(x, y, txt, endFast) {
  this.popup = document.createElement("div");
  this.popup.innerHTML = txt;
  this.popup.style.position = "absolute";
  this.popup.style.top = x + "px";
  this.popup.style.left = y + "px";
  this.popup.style.backgroundColor = "white";
  this.popup.style.padding = "10px";
  this.popup.style.border = "1px solid black";
  this.popup.style.zIndex = "9999";
  document.body.appendChild(this.popup);
  let pop = this.popup;
  this.end = function() {
    if (endFast && this.popup) {
      pop.remove();
    } else if (pop)  {
      pop.classList.add("goByeBye")
      setTimeout(function() {
        if (pop) {
          pop.remove();
        }
      }, 300);
    } 
  }

}
function copy(element, txt) {
  // console.log("copying...")
  let pos = element.getBoundingClientRect()
  console.log(pos)
  let msg = new popup(pos.y, pos.x, "Copied to clipboard! Control V to paste");
  navigator.clipboard.writeText(txt);

  setTimeout(function() {
    msg.end();
  }, 1000);

}



// swipe controls
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
        } else {
            /* left swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
          /* down swipe */ 
          console.log("down")
          setBlock(curent + 1)
        } else { 
          /* up swipe */
          console.log("up")
          setBlock(curent - 1)
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

// img-d0 img-d8
// document.querySelector('#img-dContainer:hover')
// var dNum = 0
// function demonCoreImgCycle () {
//   // console.log("curent: "+curent+", getMainIDNumber: "+getMainIDNumber("demonCoreMain", ".main"))
//   let demonCoreNumber = getMainIDNumber("demonCoreMain", ".main")
//   if (curent == demonCoreNumber || curent == demonCoreNumber - 1 && $('#img-dContainer').is(":hover") == false) {
//     // console.log("dNum: "+ dNum)
//     let $element =  $("#img-d"+dNum)
//     dNum++
//     if (dNum >= 9) dNum = 0
//     // Animate the scrolling of the <html> and <body> elements
//     $('#img-dContainer').animate({
//      scrollTop: $('#img-dContainer').scrollTop() + ($element.offset().top - $('#img-dContainer').offset().top)
//       // scrollTop:   element.offset()
//     }, 300);
//   }
//   setTimeout(() => {
//     demonCoreImgCycle ()
//   }, 2500)

// }
// demonCoreImgCycle ()

function secondImgCycle (sNum, v1, v2, v3, v4, v5) {
  console.log(sNum+", "+v1+", "+v2+", "+v3+", "+v4+", "+v5)
  console.log("curent: "+curent+", getMainIDNumber: "+getMainIDNumber(v1, v2))
  let sNumber = getMainIDNumber(""+v1, ""+v2)
  if (curent == sNumber || curent == sNumber - 1 && $(""+v4).is(":hover") == false) {
    // console.log("dNum: "+ dNum)
    let elementNum = v5+sNum
    let $element =  $(""+elementNum)
    console.log("elementNum: "+elementNum)
    sNum++
    if (sNum >= 9) sNum = 0
    // Animate the scrolling of the <html> and <body> elements
    $(""+v4).animate({
     scrollTop: $(""+v4).scrollTop() + ($element.offset().top - $(""+v4).offset().top)
      // scrollTop:   element.offset()
    }, 300);
  }
  setTimeout(() => {
    secondImgCycle (sNum, v1, v2, v3, v4, v5)
  }, 2500)

}
secondImgCycle (0, "secondImgMain", ".main", '#sContainer', '#img-sContainer', "#img-S")
secondImgCycle (0, "demonCoreMain", ".main", '#dContainer', '#img-dContainer', "#img-d")

function getMainIDNumber(stopElementID, targetCLassOrID) {
    let count = 0;
    // console.log("check")
    // Get all elements matching the target selector
    let allTargets = $(""+targetCLassOrID);

    for (let i = 0; i < allTargets.length; i++) {
        let currentElement = allTargets[i];

        // Check if the current element is the stopAtElement
        // console.log("id: "+currentElement.id)
        if (currentElement.id == stopElementID) {
          // console.log("yay!!!!!!!!")
            break; // Stop counting when we reach the designated element
        }
        count++;
    }
    return count;
}