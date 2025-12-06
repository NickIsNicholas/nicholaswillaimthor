//
// script.js
// The Main Game Loop File
// Created by Nick Thor and Bryce Sechrist
//

// console.log(elementz.elements[1]);
cost = Math.round(element(0 + 1).atomic_mass * element(0 + 1).atomic_mass)
var didNeb = false;



var up = [];

var multiplyCostBy = 1;
var multiplyCostBy2 = 1;
var multiplyMechineBy = 1;
var multiplyMechineBy2 = 2;

var sum = 3;
var gros = 3; // sort of how much money is gained over var time amount of time / 3 


// const coinElement = document.getElementById("coinButton");

// will be the number of labs created, the atomic number of the most recent lab creeated


var curentLabNum = 0;
const game = document.getElementById("game");
const newLabElement = document.getElementById("new");

if (nebCoins > 0) {
  didNeb = true;
} else {
//   gramsElement.innerHTML = "0 g"

}

var lab = [];
class labs {
  constructor() {
    this.self;
    this.auto = 0;
    this.mechine;
    this.button;
    this.student;
    this.level = 0;
    this.cost = 10.08;
    this.text;
    this.bar;
    this.options;

  }

}


if(getCookie("labs")) {
  var jsonLabs = JSON.parse(getCookie("labs"));
  for(let i = 1; i <jsonLabs.length; i++) {
    var jsonLab = jsonLabs[i]
    curentLabNum++;
    console.log(jsonLab)
    let labGroup = document.createElement('div');

    game.appendChild(labGroup);
    labGroup.classList.add('group');


    // console.log("yay")

    lab[curentLabNum] = new labs();
    var lvl = jsonLab.level
    if (lvl !== undefined) {
      
    } else {
      lvl = 0;
    }
    lab[curentLabNum].level = lvl;
    lab[curentLabNum].cost = Number(jsonLab.cost);
    lab[curentLabNum].auto = jsonLab.auto;
    lab[curentLabNum].self = labGroup;

    

    let options = document.createElement('div');
    options.classList.add('options');
    options.innerHTML = ' <button class = "btn txt" onclick="options(' + curentLabNum + ');"> Lab Options <br></button> '
    labGroup.appendChild(options);
    lab[curentLabNum].options = options;

    if (didTalk < 5) {
      lab[curentLabNum].options.style.visibility = "hidden";
    }
    
    
    
    mechineNew(curentLabNum, lvl, labGroup);
    

    let student = document.createElement('div');
    student.classList.add('student');
    if(jsonLab.auto == "0") {
      student.innerHTML = ' <button class = "btn txt" onclick="upgradeStudent(' + curentLabNum + ');"Automation <br> Automation for <br> 1 NebCoin </button> '
      
    } else {
      student.innerHTML =' <button class = "btn txt" onclick="upgradeStudent(' + curentLabNum + ');"Automation x' + lab[curentLabNum].auto + '<br> to x' + (lab[curentLabNum].auto + 1) + ' for 2 NebCoin </button>  <img id="friend" src="img/JekoLoopO.gif" alt = "Student"/> '
      console.log("OH NOOOOOO")
    }
    labGroup.appendChild(student);
    lab[curentLabNum].student = student;

    
    buttonNew(curentLabNum, lvl, labGroup)
    

    let text = document.createElement('div');
    text.classList.add('displ');
    labGroup.appendChild(text);
    // text.innerHTML = "eeeeeeeee"
    lab[curentLabNum].text = text;
    if (didTalk < 3) {
      lab[curentLabNum].student.style.visibility = "hidden";
    }

    // balance
    cost = Math.round(dificulty * gros) 

    newLabElement.innerHTML = "Click For New Lab <br> Cost: " + cost.toExponential(3).replace(/e\+?/, ' x 10^') + " g";

    // console.log("yay")
    multiplyCostBy = multiplyCostBy * multiplyCostBy2;

  }

}

function element(atomicNum) {
  return elementz.elements[atomicNum - 1];
}

console.log(element(1).name);

var grams = Math.round(element(curentLabNum + 1).atomic_mass * multiplyCostBy);
console.log("grams: " + grams);
var coins = 0;

// try to get past cookies, if it failes:
// set new cookie

if (Number(getCookie("grams")) > grams) {
  grams = Number(getCookie("grams"));
  gramsElement.innerHTML = Math.round(grams).toExponential(3).replace(/e\+?/, ' x 10^')

} else {
  // console.log("New Cookie");
  setCookie("grams", grams, 256);
}
console.log("grams: " + grams);
if (getCookie("nebCoins") >= nebCoins) {
  nebCoins = getCookie("nebCoins");
  coinElement.innerHTML = nebCoins + " NebCoin";

} else {
  console.log("New Cookie");
  setCookie("nebCoins", nebCoins, 256);
}

var sample1 = 3;

var sample2 = 2;

// this is when the player clicks the  "new lab" button
function newLab() {
  // check if they have enough grams to buy it
  if (grams >= cost) {
    curentLabNum++;

    transitionToNumber(grams, cost, gramsElement, "", " g")
    grams = Math.round((grams - cost) * 1000) / 1000
    // gramsElement.innerHTML = grams + " g";

    let labGroup = document.createElement('div');

    game.appendChild(labGroup);
    labGroup.classList.add('group');


    // console.log("yay")

    lab[curentLabNum] = new labs();
    lab[curentLabNum].level = curentLabNum;
    if(curentLabNum > 117) {
      lab[curentLabNum].level = 117
    }

    lab[curentLabNum].self = labGroup;
    // balance
    lab[curentLabNum].cost = Math.round(dificulty * gros);

    let options = document.createElement('div');
    options.classList.add('options');
    options.innerHTML = ' <button class = "btn txt" onclick="options(' + curentLabNum + ');"> Lab Options <br></button> '
    labGroup.appendChild(options);
    lab[curentLabNum].options = options;

    if (didTalk < 5) {
      lab[curentLabNum].options.style.visibility = "hidden";
    }

    mechineNew(curentLabNum, lab[curentLabNum].level, labGroup);

    let student = document.createElement('div');
    student.classList.add('student');
    student.innerHTML = ' <button class = "btn txt" onclick="upgradeStudent(' + curentLabNum + ');"Automation <br> Automation for <br> 1 NebCoin </button> '
    labGroup.appendChild(student);
    lab[curentLabNum].student = student;

    buttonNew(curentLabNum, lab[curentLabNum].level, labGroup)

    let text = document.createElement('div');
    text.classList.add('displ');
    labGroup.appendChild(text);
    // text.innerHTML = "eeeeeeeee"
    lab[curentLabNum].text = text;

    if (didTalk < 3) {
      lab[curentLabNum].student.style.visibility = "hidden";
    }

    
    cost = Math.round(dificulty * element(curentLabNum + 1).atomic_mass * element(curentLabNum + 1).atomic_mass)

    newLabElement.innerHTML = "Click For New Lab <br> Cost: " + cost.toExponential(3).replace(/e\+?/, ' x 10^') + " g";

    // console.log("yay")
    multiplyCostBy = multiplyCostBy * multiplyCostBy2;
    // window.scrollTo(0, document.body.scrollHeight);
    setCookie("grams", grams, 256);
    flashRed(newLabElement, "blue");

    //Flash Grams Red
gramsElement.classList.remove("redFlashr")
  void gramsElement.offsetWidth
  gramsElement.classList.add("redFlashr")


  } else {
    flashRed(newLabElement, "red");
  }


}

function press(atomicNum, multiplyBy, theLab) {
  // let percent = (lab[theLab].cost - grams)/lab[theLab].cost
    // lab[theLab].bar.style.backgroundSize = "" + Math.round(percent*100) + "% 100%";
    if (grams > lab[theLab].cost) {
      // lab[theLab].bar.style.backgroundSize = "0%"
      lab[theLab].bar.style.backgroundColor = "#b5e3e8"
    } else {
      lab[theLab].bar.style.backgroundColor = "#ffffff"
    }

  if (multiplyBy > 1) {
    lab[theLab].text.innerHTML = "+"+ Math.round(element(atomicNum).atomic_mass*1000)/1000 + " g " + "<b>X" + multiplyBy + "</b>";
    lab[theLab].text.classList.remove("txtFlashr")
    void lab[theLab].text.offsetWidth
    lab[theLab].text.classList.add("txtFlashr")
     // lab[theLab].bar.style.backgroundSize = "" + Math.round(((lab[theLab].cost - grams)/lab[theLab].cost)*100) + "% 100%";
    press2(atomicNum, multiplyBy, theLab)
  } else if (multiplyBy == 1) {
    lab[theLab].text.innerHTML = "+"+ Math.round(element(atomicNum).atomic_mass*1000)/1000 + " g "
    lab[theLab].text.classList.remove("txtFlashr")
    void lab[theLab].text.offsetWidth
    lab[theLab].text.classList.add("txtFlashr")
    // lab[theLab].bar.style.backgroundSize = "" + Math.round(((lab[theLab].cost - grams)/lab[theLab].cost)*100) + "% 100%";
    press2(atomicNum, multiplyBy, theLab)
  }

} 
function press2(atomicNum, multiplyBy, theLab) {
  
  
  makeBig(lab[theLab].button, lab[theLab].text);
  let nextAdd = Math.round((element(atomicNum).atomic_mass * multiplyBy) * 1000) / 1000;
  sum += nextAdd
  
  grams += nextAdd
  gramsElement.innerHTML = Math.round(grams).toExponential(3).replace(/e\+?/, ' x 10^') +" g";
  //do animation
  
  gramsElement.classList.remove("greenFlashr")
  void gramsElement.offsetWidth
  gramsElement.classList.add("greenFlashr")

  let addTo = 13;
  let multipBy = 18;
  
  let symbol = element(atomicNum).symbol
  let theValue = ((theLab - 1) * multipBy) + addTo
  if (up[theValue] == undefined) {
    up[theValue] = multiplyBy + symbol
  } else {
    up[theValue] = up[theValue] + " " + multiplyBy + symbol
  }
  



}
function upgradeElement(labId) {
  if (grams >= lab[labId].cost  && !(lab[labId].level > 119)) {
    
    transitionToNumber(grams, lab[labId].cost, gramsElement, "", " g")
    grams -= lab[labId].cost;

    lab[labId].level++;

    let lvl = lab[labId].level;
    lab[labId].cost = Math.round(lab[labId].cost + (gros * dificulty) + element(lab[labId].level+1).atomic_mass);
    mechineHTML (labId, lvl)
    buttonHTML (labId, lvl)
  gramsElement.classList.remove("redFlashr")
  void gramsElement.offsetWidth
  gramsElement.classList.add("redFlashr")
    if (didTalk == 63 && lab[labId].level == 120) {
      didTalk = 64;
      // window.alert("YAY")
      save();
    }
    
  } 
}
function flashRed(toFlash, color) {
  toFlash.style.color = color;
  setTimeout(function() {
    toFlash.style.color = "black";
  }, 100);
}
function makeBig(toFlash, extra) {
    extra.style.opacity = 1;
    toFlash.style.width = "14%"
    setTimeout(function() {
      extra.style.opacity = 0;
      toFlash.style.width = "13%"
      setTimeout(function() {
      extra.innerHTML = ""
    }, 200);
    }, 70);
}

function transitionToNumber(start, end, txtElement, frontText, endText) {
  // end = end - start;
  setTimeout(function() {
    txtElement.innerHTML = frontText + (start - (end * 3 / 4)).toExponential(3).replace(/e\+?/, ' x 10^') + endText;
    setTimeout(function() {
      txtElement.innerHTML = frontText + (start - (end / 2)).toExponential(3).replace(/e\+?/, ' x 10^') + endText;

      setTimeout(function() {
        txtElement.innerHTML = frontText + (start - (end / 4)).toExponential(3).replace(/e\+?/, ' x 10^') + endText;

        setTimeout(function() {
          txtElement.innerHTML = frontText + grams.toExponential(3).replace(/e\+?/, ' x 10^') + endText;
        }, 100);
      }, 100);
    }, 100);
  }, 100);
}

//Neb Mode
var ke1 = 0;
var ke2 = 0;
var ke3 = 0;
document.addEventListener('keydown', (event) => {
  ke3 = ke2;
  ke2 = ke1;
  ke1 = event.key;
  // console.log(ke1 + ", " + ke2 + ", " + ke3);
  if (ke3 == "n" && ke2 == "e" && ke1 == "b") {
    grams += 99999999999;
    giveNewNebCoin(200)
    let bigNeb = document.getElementById("neb");
    bigNeb.classList.add("bigNeb");
    gramsElement.innerHTML = Math.round(grams).toExponential(3).replace(/e\+?/, ' x 10^')

    setTimeout(function() {
      bigNeb.classList.remove("bigNeb");
    }, 7000);

  } else if (ke3 == "d" && ke2 == "t") {
    didTalk = parseInt(ke1);
    console.log("Changed didTalk")
    console.log("didTalk: " + didTalk)
    setCookie("didTalk", didTalk, 256);
  }
});

//Game Save Interval
var sample3 = 2;
const devideBy = 3;
setInterval(() => {
  // console.log(gros);
  save();  // function in cookie.js
  gramsElement.classList.remove("redFlashr")
  gramsElement.classList.remove("greenFlashr")
  if (sample1 < sample2) sample1 = sample2

  gros = Math.round(((sample1 / 3) + (sample2 * 2 / 3) + sample3 + sum) / devideBy)
  sample3 = sample2;
  sample2 = sample1;
  sample1 = sum;

  totalGramz += Math.round(sum);
  // console.log("totalGramz: " + totalGramz)


  // gros = sum;
  sum = 1;
  // console.log("gros: " + gros);
  // balance

  
}, time / devideBy);
// nextCoinElement.style.display = "none";
// prestige.style.visibility = "hidden";
const upr = document.getElementById("up");

setTimeout(function() {
  
setInterval(() => {
  for (let i in lab) {
    
    // if (lab[i].auto >= 1) {
      let varNameIDK = lab[i].level;

      // let varNameIDK = element(lab[i].level);
      // console.log("varNameIDK: " + varNameIDK)
      press(varNameIDK, lab[i].auto, i);
    // }
  }
}, 500);
}, 90);
const loadAndSyncroniseGIF = document.getElementById("loadAndSyncroniseGIF");
loadAndSyncroniseGIF.innerHTML = "<img id='friend' src='img/JekoLoopO.gif' alt = 'Student'/> <h1 class = 'txt' style = 'margin: auto; text-align: center;'> <br><br>Made By: <br><br><br>Nicholas William Thor <br><br> AND <br><br>Bryce Sechrist <br><br><br><br><br><br><br><br> <a href='https://nicholaswilliamthor.nickisnicholas.repl.co' target='_blank'>Nick's Portfolio</a> <br><br><br><br><br><br><br></h1>"
setInterval(() => {
  // up[]
  up.shift();
  upr.innerHTML = up.join("<br/>");
}, 75);

function upgradeStudent(labNum) {
  // nebCoins++
  if (nebCoins > 1 && lab[labNum].auto > 0 || nebCoins > 0 && lab[labNum].auto == 0) {
    // nebCoins -= (lab[labNum].auto + 1);
    if (lab[labNum].auto > 0) {
      nebCoins--;
      permCoin++;
    }
    nebCoins--;
    permCoin++;
    coinElement.innerHTML = nebCoins + " NebCoin"
    lab[labNum].auto++;
    //'+(lab[labNum].auto + 1)+'
    lab[labNum].student.innerHTML = ' <button class = "btn txt" onclick="upgradeStudent(' + labNum + ');"Automation x' + lab[labNum].auto + '<br> to x' + (lab[labNum].auto + 1) + ' for 2 NebCoin </button>  <img id="friend" src="img/JekoLoopO.gif" alt = "Student"/> '
    didAuto = true;
  }
}

if (nebCoins > 0) {
  // coinElement.style.display = "block";
    // coinElement.innerHTML = "Get NebCoin!";
    // clearInterval(interval);
  coinElement.style.visibility = "visible";
  prestige.style.visibility = "visible";
    
    setTimeout(function() {
      coinElement.innerHTML = nebCoins + " NebCoin";
    }, 4000);
} else {
  console.log("working well")
  
var interval = setInterval(() => {
  coinElement.style.visibility = "hidden";
  prestige.style.visibility = "hidden";
  // console.log("eeeeeeeeeeeee")
  if (didTalk >= 2) {
    console.log("IT SHIPPED THE THING")
    // console.log("reegboewruighebalufgoahoipsflhblZch")
    coinElement.style.visibility = "visible";
    prestige.style.visibility = "visible";
    // coinElement.innerHTML = "Get NebCoin!";
    clearInterval(interval);
    showCoin = true;
    // setCookie("showCoin", showCoin, 256);
    
    // setTimeout(function() {
    //   coinElement.innerHTML = nebCoins + " NebCoin";
    // }, 2000);
  } else if (grams > nebTalk2 && didTalk == 1) {
    // console.log("IT DID THE THING")
    clearInterval(interval);
    showNebAsking(
      "Hi there!  ", 'Hello!', "AAAAAH!",
      function() { talkTwo1() },
      function() { talkTwo1() }
    );
  }
}, 1000);
}

if (window.innerHeight >= window.innerWidth) {
  window.alert("This game is best on a wider screen.  \nIf on mobile, please rotate your phone\n\nThank you")
}

  if (getCookie("didTalk")>=1) {
    // console.log("Skipped!")
  } else {
    
    gramsElement.innerHTML = "0.00 g"
    
    showNebAsking(
      'Hey, you!  ', 'Me?', "Leave me alone.",
      function() { talk1() },
      function() { talk1() }
    );
  }

  