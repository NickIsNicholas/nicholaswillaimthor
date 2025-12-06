//
// prestige.js
// File for all the Prestigeing things
//

var multiplyNebCoinBy = 100;
const multiplyNebCoinBy2 = 3;
var didTalk = 0;
var didAuto = false;

const coinElement = document.getElementById("coinButton");
const gramsElement = document.getElementById("gramsButton");
const nextCoinElement = document.getElementById("nextCoin");
const prestige = document.getElementById("prestige");

if (getCookie("nebCoins") > 0) {
  var nebCoins = getCookie("nebCoins");
  coinElement.innerHTML = String(nebCoins) + " NebCoin"
} else {
  console.log("New Cookie Lab");
  var nebCoins = 0;
  coinElement.innerHTML = String(nebCoins) + " NebCoin"
  setCookie("nebCoins", nebCoins, 256);
}
if (getCookie("permCoin") > 0) {
  var permCoin = getCookie("permCoin");
  // coinElement.innerHTML = String(nebCoins) + " NebCoin"
} else {
  console.log("New Cookie permCoin");
  var permCoin = 0;
  // coinElement.innerHTML = String(nebCoins) + " NebCoin"
  setCookie("permCoin", permCoin, 256);
}

if (getCookie("totalGramz") > 3) {
  var totalGramz = parseInt(getCookie("totalGramz"));
  console.log("totalGramz: " + totalGramz)
  // coinElement.innerHTML = String(nebCoins) + " NebCoin"
} else {
  // console.log("New Cookie Lab");
  var totalGramz = 2;
  // coinElement.innerHTML = String(nebCoins) + " NebCoin"
  setCookie("totalGramz", totalGramz, 256);
}

if (getCookie("multiplyNebCoinBy") >= 2) {
  multiplyNebCoinBy = getCookie("multiplyNebCoinBy");
  console.log("poopie")
  // coinElement.innerHTML = String(multiplyNebCoinBy) + " NebCoin"
} else {
  console.log("New Cookie NEBCOIN");
  multiplyNebCoinBy = 100;
  // coinElement.innerHTML = String(multiplyNebCoinBy) + " NebCoin"
  setCookie("multiplyNebCoinBy", multiplyNebCoinBy, 256);
}
console.log("Get Cookie didTalk: "+getCookie("didTalk"))
if (getCookie("didTalk") >= 0) {
  // didTalk = getCookie("didTalk");  
  didTalk = getCookie("didTalk");
  didAuto = true;
  // console.log("poopie")
  // coinElement.innerHTML = String(multiplyNebCoinBy) + " NebCoin"
} else {
  console.log("New Cookie didTalk");
  didTalk = 0;
  // coinElement.innerHTML = String(multiplyNebCoinBy) + " NebCoin"
  setCookie("didTalk", didTalk, 256);
  coinElement.style.visibility = "hidden";
}

  function giveNewNebCoin(number, reset) {
    // console.log("nebCoins = "  + typeof nebCoins);
    // console.log("number  = "  + typeof number);
    // console.log("permCoin = "  + typeof permCoin);
    let num = nebCoins - -number - -parseInt(permCoin)
    const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    button.disabled = true;
  }
    loop(num, reset);
    console.log("nebCoins + number + permCoin = "  + (num));
    
    // for (let i = nebCoins; i < nebCoins + number + permCoin; i++)
      
    // nebCoins += number + permCoin

  }
function loop (end, reset) {
  
  if (end > nebCoins) {
    placeImg("img/CoinPixel.gif", "1", "1", 'NebCoin', end)
    setTimeout(function() {

      
      loop(end, reset);
      console.log("end")
      console.log(end)
      console.log("nebCoins")
      console.log(nebCoins)
    }, 100);
    
  } else {
    setTimeout(function() {
      nebCoins = end;
      setCookie("nebCoins", nebCoins, 256)
      setCookie("permCoin", 0, 256)
      setCookie("didTalk", didTalk, 256)
      if (reset == true) {
        resetGame(true, true);
      } else {
        location.reload();
      }
    }, 500);
  }
}


function placeImg(src, width, height, alt, end) {
  let imge = document.createElement("img");
  imge.src = src;
  imge.width = "1";
  imge.height = "1";
  imge.alt = alt;
  imge.classList.add("absImge")
  
  
  // set the position
  imge.style.position = 'fixed';
  imge.style.top = (95 * Math.random()) + '%';
  imge.style.left = (95 * Math.random()) + '%';

  document.body.appendChild(imge);
  setTimeout(function() {
    imge.remove()
    if (end > nebCoins) {
      nebCoins++;
      coinElement.innerHTML = String(nebCoins) + " NebCoin"
      coinElement.classList.remove("yellowFlashr")
      void coinElement.offsetWidth
      coinElement.classList.add("yellowFlashr")
    }
  }, 690);
}
// placeImg("img/CoinPixel.gif", "1", "1", 'NebCoin')

  function prestage(num, reset) {
    running = false;
    if (num > 0) {
      
      giveNewNebCoin(num, reset)  // reset game after 

      

    } else {
      showNebAsking(
        'Rut Roh!  Looks like you tried to sell me your buisness in exchange for nothing!', 'I know', 'Oops!',
        function() { popoverNeb.style.display = "none"; rutRoh(); },
        function() { popoverNeb.style.display = "none"; }
      );
    }

  }
  function useless() { console.log("this does nothing") }

  function rutRoh() {
    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
      button.disabled = true;
    }
    showNebAsking(
      'Free Realestate!', 'What!', 'Oh no');
    setTimeout(function() {
      showNebAsking(
        'After all, Chemistry is Funistry', 'Wait!', 'These buttons do nothing now >:)');
      setTimeout(function() {
        showNebAsking(
          'and Funistry is Deathistry', 'What?', 'Stop!');
        setTimeout(function() {
          showNebAsking(
            'and Deathistry is...', 'no', ':(');
          setTimeout(function() {
            showNebAsking(
              'all of your game progress goes to me!', 'wat', 'Safety goggles protect ur eyes from chemicals but also prevent u from seeing the haters');
            setTimeout(function() {
              showNebAsking(
                ':)', ':O', ':/');
              setCookie("rutRoh", true, 256);
              location.reload();


            }, 4500);

          }, 2000);

        }, 3000);

      }, 3000);

    }, 2500);
  }




  function showNebAsking(text, button1, button2, callback1, callback2) {
    var popoverNeb = document.getElementById("popoverNeb")

    // console.log("hello")
    popoverNeb.getElementsByTagName("p")[0].innerHTML = text
    var buttons = popoverNeb.getElementsByTagName("button")
    buttons[0].innerHTML = button1
    buttons[1].innerHTML = button2


    buttons[0].addEventListener("click", callback1, { once: true })
    buttons[1].addEventListener("click", callback2, { once: true })
    popoverNeb.style.display = "block"

  }

  // function talking() {
  //   if (didTalk == true) {
  //     let nc = 1;
  //     // if (didAuto == true) {
  //     nc = Math.floor(Math.log((grams/2)));
  //     // }
  //     // console.log("EEEEEEEEE "+ multiplyNebCoinBy );
  //     if (grams > nebTalk2) {
  //       if (getCookie("permCoins") > 0) {
  //         // var permCoins = 
  //         permCoins = nc + getCookie("permCoins");
  //         showNebAsking(
  //         'How about this, I will give you a wopping amount of ' + (nc+nebCoins) + ' (+'+(permCoins-nebCoins)+' nebCoin that you have spent so far)' +' NebCoin for your entire factory. Sound good?', 'yes', 'no',
  //         function() { popoverNeb.style.display = "none"; prestage(nc, true) },
  //         function() { popoverNeb.style.display = "none"; console.log('no') }
  //         );
  //         // coinElement.innerHTML = String(nebCoins) + " NebCoin"
  //       } else {
  //         // console.log("New Cookie Lab");
  //         var permCoins = nc;
  //         // coinElement.innerHTML = String(permCoins) + " NebCoin"
  //         setCookie("permCoins", permCoins, 256);
  //         showNebAsking(
  //         'How about this, I will give you a wopping amount of ' + nc + ' NebCoin for your entire factory. Sound good?', 'yes', 'no',
  //         function() { popoverNeb.style.display = "none"; prestage(nc, true) },
  //         function() { popoverNeb.style.display = "none"; console.log('no') }
  //       );
  //       }

        
  //     } else {
  //       showNebAsking(
  //         'It apears that your lab is not worth much, YET... Come back soon and we will talk ;)', 'Sure?', 'What',
  //         function() { popoverNeb.style.display = "none"; },
  //         function() { popoverNeb.style.display = "none"; }
  //       );
  //     }
  //   } else {
  //     // didTalk = true;
  //     // let nc = Math.floor(grams / (nebCoinDificulty * gros));
  //     showNebAsking(
  //       'Hello chemist, I see that you have gone far with your Chemistry Lab. ', 'Thanks...?', 'Huh',
  //       function() { popoverNeb.style.display = "none"; talking() },
  //       function() { popoverNeb.style.display = "none"; talking() }
  //     );
  //   }
  // }
