const backShop = document.getElementById("shop");
const fill = document.getElementById("fill");
const sell = document.getElementById("sell");
function openShop() {
  // console.log("ehwgbhgvuwgSD")
  backShop.style.visibility = "visible";
  fill.style.visibility = "visible";
  sell.innerHTML = ""
  // totalGrams
  console.log("total grams: " + totalGramz)
  let nc = Math.floor(Math.log((totalGramz)));
  if (grams < 100 && didTalk > 2) {
    nc = 0;
  }
  //let permCoin = 0; //what is this supposed to be? what is a permCoin, it doens't show up in console.  I am fixing that, Permcoin is supposed to be how much NebCoin you have used up alredy, so that the player gets it back when they prestige 
  // it wasn't working because sometimes when I used it I did inconsistant capitolisation 
  //still no work.
  if (permCoin > 0) {
        shopItem("Prestage", `You can get <b>${nc}</b> NebCoin (+ the ${permCoin} NebCoin that you have spent alredy) by selling all of your labs.`, "SELL", "prestage("+nc+",true);")
  } else {
    permCoin = 0;
    shopItem("Prestage", `You can get <b>${nc}</b> NebCoin by selling all of your labs.  This will unlock <b>AUTOMATIONS!</b>`, "SELL", "prestage("+nc+",true);")
  }
  if (didTalk > 4) {
    // shopItem("Sell Lab 3", `Will destroy this lab.  EXPIREMENT!  DO NOT USE THIS IS FOR DEVS ONLY MAY BREAK YOUR GAME DO NOT CLICK!`, "NO", ``)
  }
  shopItem("Double Grams", `Will multiply your grams X2 for 1 nebCoin!`, "SELL", "double();")
}
function exitShop() {
document.getElementById("shop").style.visibility = "hidden";
document.getElementById("fill").style.visibility = "hidden";  
}
// shopItem
// if called, will create a div in the shop with text, call back, button text etc 

function shopItem(title, description, buttonText, callback) {
sell.innerHTML += `<div class=shopItem><h1>${title}</h1><p>${description}</p><button onClick="${callback} exitShop();">${buttonText}</button></div>` 
}

if (didTalk == 2 && nebCoins > 0) {
  didTalk = 3
  setCookie("didTalk", didTalk, 256)
}

function options (theLab) {
  backShop.style.visibility = "visible";
  fill.style.visibility = "visible";
  sell.innerHTML = ""
  let nc = (2 * lab[theLab].auto) + Math.ceil(((lab[theLab].level)/16)-1);
  shopItem("Sell Lab", `You can get <b>${nc}</b> NebCoin by selling this lab.`, "SELL", `sellLab (`+nc+`, `+theLab+`);`)
}  
function sellLab (nc, theLab) {
  permCoin -= nc;
  if (nc >2) {
    permCoin ++;
  }
  setCookie("permCoin", permCoin)
  loop(nc + parseInt(permCoin), false)
  lab[theLab].self.classList.add('fadeOut');
  lab.splice(theLab, 1);
  save();
  // location.reload();
}
function double() {
  if (nebCoins > 0) {
    nebCoins--;
    coinElement.innerHTML = nebCoins + " NebCoin"
    
    gramsElement.classList.remove("greenFlashr")
    void gramsElement.offsetWidth
    gramsElement.classList.add("greenFlashr")
    gramsElement.innerHTML = (grams * 1.1).toExponential(3).replace(/e\+?/, ' x 10^') + " g";     gramsElement.classList.remove("greenFlashr")
    void gramsElement.offsetWidth
    gramsElement.classList.add("greenFlashr")
    
    setTimeout(function() {
    gramsElement.innerHTML = (grams * 1.3).toExponential(3).replace(/e\+?/, ' x 10^') + " g";    gramsElement.classList.remove("greenFlashr")
    void gramsElement.offsetWidth
    gramsElement.classList.add("greenFlashr")
    
    setTimeout(function() {
    gramsElement.innerHTML = (grams * 1.5).toExponential(3).replace(/e\+?/, ' x 10^') + " g";    gramsElement.classList.remove("greenFlashr")
    void gramsElement.offsetWidth
    gramsElement.classList.add("greenFlashr")
    
    setTimeout(function() {
    gramsElement.innerHTML = (grams * 1.8).toExponential(3).replace(/e\+?/, ' x 10^') + " g";    gramsElement.classList.remove("greenFlashr")
    void gramsElement.offsetWidth
    gramsElement.classList.add("greenFlashr")
    
    setTimeout(function() {
      grams = grams * 2; 
      gramsElement.innerHTML = grams.toExponential(3).replace(/e\+?/, ' x 10^') + " g";    gramsElement.classList.remove("greenFlashr")
    void gramsElement.offsetWidth
    gramsElement.classList.add("greenFlashr")
    }, 400);
    }, 300);
    }, 300);
    }, 400);
  }
}