//
// cookie.js
// File for cookie-related functions
//

// 
// balancing variables
//

const nebTalk2 = 200;  // how long until neb comes back to tell you about shop 
const time = 4000; // set to how long it should take for a player to upgrade a lab to the next element
const nebCoinDificulty = 15.0;  // multiply gros by this to determine cost for next NebCoin
var dificulty = 1.0;

// end of balancing variables


document.addEventListener('contextmenu', event => event.preventDefault());
var running = true;
function setCookie(cookName, cookVal, expireDays) {
  if (running == true) {
    const d = new Date();
    d.setTime(d.getTime() + (expireDays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cookName + "=" + cookVal + ";" + expires + ";path=/";
    // console.log("new cookie: " + cookName + " = " + cookVal);
  }
}

function getCookie(cookName) {
  let ca = document.cookie.split('; ');
 for(let i = 0; i <ca.length; i++) {
  
    if (ca[i].startsWith(cookName)) {
      return ca[i].replace(cookName+ "=", "");
    }
}

}

// function getCookie(cookName) {
//   let name = cookName + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i <ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       // console.log(cookName + ": " + c.substring(name.length, c.length));
//       return c.substring(name.length, c.length);
//     }
//   }
//   return false;
// }


function deleteAllCookies(noResetCoins) {
    running = false;
    document.cookie.split(";").forEach(function(c) { 
    // if (noResetCoins && c.trim().startsWith("nebCoins")) {
    //   return; // skip this cookie
    // } 
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });

    if (noResetCoins == true) {
      const d = new Date();
      d.setTime(d.getTime() + (256*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = "nebCoins=" + nebCoins + ";" + expires + ";path=/";
      document.cookie = "didTalk=" + didTalk + ";" + expires + ";path=/";
    
      // console.log("new cookie: " + cookName + " = " + cookVal);
    }
    // console.log("weeeeeeeeeeeeee")

}

const reset = document.getElementById("reset");

var clicked = false;
//
// When calling resetGame(), you can use default parameters and customize the reset. 
//
function resetGame(justDoIt = false, noResetCoins = false) {
  reset.innerHTML = "RESET ALL PROGRESS";
  console.log("1");
  
  if (clicked == true || justDoIt) {
    console.log("2");
    deleteAllCookies(noResetCoins);


    const game = document.getElementById("allGame");
      game.style.fontSize = "10vw"
      game.innerHTML = "Game Resetting..."
      clicked = true;
    console.log("3");
    setTimeout(function() {
      clicked = true;
      // game.innerHTML = "<br> <br> Game Reset";
      console.log("5");
      setTimeout(function() {
        console.log("6");
        // deleteAllCookies(noResetCoins);
        location.reload();
      }, 500);
    }, 500);
  }
  clicked = true;
  setTimeout(function() {
    reset.innerHTML = "Reset Game";
    clicked = false;
  }, 3000);
}


function save() {
  setCookie("grams", grams, 256);
  setCookie("nebCoins", nebCoins, 256);
  setCookie("labs", JSON.stringify(lab), 256);
  setCookie("totalGramz", totalGramz, 256);
  setCookie("permCoin", permCoin, 256);

  if (didTalk == 4 && grams > 5000) {
    didTalk = 63;
    console.log("didTalk: "+ didTalk)
    console.log("didTalk: "+ didTalk)
    console.log("didTalk: "+ didTalk)
    showNebAsking(
      "Yup!  I'm Back again!", "HIIIII!", 'NOOO!',
      function() { talkFour1() },
      function() { talkFour1() }
    );
     // add in ability to sell labs array.splice().  Refund player with the .auto
  } else if (didTalk == 64) {
    // if (lab[0].level && lab[0].level == 121 || lab[1].level && lab[1].level == 121 || lab[2].level && lab[2].level == 121 || lab[3].level && lab[3].level == 121 || lab[4].level && lab[4].level == 121)  {
      showNebAsking(
      "You... you... did it!", "OH!", 'I did?',
      function() { talkFinal1() },
      function() { talkFinal1() }
    );
      didTalk = 65;
    // }
  }
  setCookie("didTalk", didTalk, 256);
}
// if (document.addEventListener) {
//   document.addEventListener('contextmenu', function(e) {
//     alert("You've tried to open context menu"); //here you draw your own menu
//     e.preventDefault();
//   }, false);
// } else {
//   document.attachEvent('oncontextmenu', function() {
//     alert("You've tried to open context menu");
//     window.event.returnValue = false;
//   });
// }
setTimeout(function() {
  if (didTalk == 3 && lab[3]==undefined) {
    didTalk = 4
      console.log("set did talk to 4 right")
    console.log("set did talk to 4 right")
    console.log("set did talk to 4 right")
     // add in ability to sell labs array.splice().  Refund player with the .auto
    showNebAsking(
      "Hay!  You know, you can create more labs... right?", "OH!", 'Ok?',
      function() { talkThree1() },
      function() { talkThree1() }
    );
  }
  if (didTalk == 3) {
    didTalk = 4
    setCookie("didTalk", didTalk, 256)
    console.log("set did talk to 4 wrong")
    console.log("set did talk to 4 wrong")
    console.log("set did talk to 4 wrong")
  } 
}, 40_000);
// if (didTalk == 2 && nebCoins > 0) {
//   didTalk = 3
//   setCookie("didTalk", didTalk, 256)
// }
console.log("rutroh = "+ getCookie("rutRoh"))
setTimeout(function() {
  if (getCookie("rutRoh") == "true") {
    setCookie("rutRoh", false, 256);
    showNebAsking(
      "No, I wouldn't delete all of your progress.  <br><br>Congrats though, on upgrading to Nebonium!", "OH THANK GOOBNEZZ!", 'Dat waz meen.',
      function() { popoverNeb.style.display = "none"; },
      function() { popoverNeb.style.display = "none"; }
    );
  }
}, 4_000);