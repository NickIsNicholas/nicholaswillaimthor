function talk1() {
    showNebAsking(
      'You wanna make a cool chem lab?', 'Yes', 'Do I have a choice?',
      function() { talk1ANDhalf() },
      function() { talk1ANDhalf() }
    );
  }
  function talk1ANDhalf() {

    showNebAsking(
      "Well... It'll cost you!", "Money?", 'Time?',
      function() { talk2() },
      function() { talk2() }
    );
  }
  function talk2() {

    showNebAsking(
      "And you look kinda... ", "What?", 'Over it?',
      function() { talk3() },
      function() { talk3() }
    );
  }
  function talk3() {
    gramsElement.classList.remove("redFlashr")
    void gramsElement.offsetWidth
    gramsElement.classList.add("redFlashr")
    gramsElement.innerHTML = "--> 0.00 g"
    // gramsElement.innerHTML = "--> 10.08 g"

    showNebAsking(
      'Broke...', 'What?', "Compared to who?",
      function() { talk4() },
      function() { talk4() }
    );
  }

  function talk4() {
    gramsElement.classList.remove("redFlashr")
    showNebAsking(
      '<br>Here, let me get you started with some grams!', 'Grams of what?  I am scared!', 'InstaGRAMS?!?',
      function() { talk5() },
      function() { talk5() }
    );
  }
  function talk5() {
    gramsElement.innerHTML = "10.08 g"
    gramsElement.classList.remove("greenFlashr")
    void gramsElement.offsetWidth
    gramsElement.classList.add("greenFlashr")
    // gramsElement.innerHTML = "--> 0 g"
    
    showNebAsking(
      'There you go!', 'Thanks!', "I didn't ask for this.",
      function() { talk6andAHalf() },
      function() { talk6andAHalf() }
    );
  }
  function talk6andAHalf() {
    gramsElement.classList.remove("redFlashr")
  gramsElement.classList.remove("greenFlashr")
    gramsElement.innerHTML = "10.08 g"
  //   showNebAsking(
  //     '<br>I loaned you some grams...', 'yeah', 'so',
  //     function() { talk6() },
  //     function() { talk6() }
  //   );
  // }

  // function talk6() {
    showNebAsking(
      'Since I loaned you 10.08 precious grams... ', 'Yeah?', 'So?',
      function() { talk7() },
      function() { talk7() }
    );
  }
  function talk7() {
    showNebAsking(
      '<br><br>By the laws of <del>communism</del> capitalism...', 'What?', '¿Que?',
      function() { talk8() },
      function() { talk8() }
    );
  }
  function talk8() {
    popoverNeb.classList.add("grayscale");
    // setCookie("didTalk2", true, 256);
    // popoverNeb.classList.add("redFlashr")
    // void popoverNeb.offsetWidth
    // popoverNeb.classList.remove("redFlashr")
    showNebAsking(
      "I'll expect my grams back!  ", 'NO!', 'Keep dreaming.',
      function() { talk9() },
      function() { talk9() }
    );
  }
  function talk9() {
    didTalk = 1;
    setCookie("didTalk", didTalk, 256);
    popoverNeb.classList.remove("grayscale");
    
    showNebAsking(
      'Good Luck! <br>Now get to work on your chem lab!', 'OH BOY!  I AM SO EXCITED!', 'thriled.',
      function() { popoverNeb.style.display = "none"; },
      function() { popoverNeb.style.display = "none"; }
    );
  }

function talkTwo1() {
  // popoverNeb.classList.add("grayscale");
  gramsElement.innerHTML = Math.round(grams).toExponential(3).replace(/e\+?/, ' x 10^') +" g";
  showNebAsking(
    "Didn't mean to startle you.", 'Yeah?', "Anything but this.",
    function() { talkTwo2() },
    function() { talkTwo2() }
  );
}
function talkTwo2() {
  popoverNeb.classList.add("grayscale");
  showNebAsking(
    'Or did I?', 'Yes!', "Thanks...?",
    function() { talkTwo3() },
    function() { talkTwo3() }
  );
}
function talkTwo3() {
  popoverNeb.classList.remove("grayscale");
  showNebAsking(
    "So, <br>you've got a good amount of grams now...<br><br><em>More than me</em>", 'I do!', "Thanks?",
    function() { talkTwo3half() },
    function() { talkTwo3half() }
  );
}
function talkTwo3half() {
  popoverNeb.classList.add("saturate");
  showNebAsking(
    "We can't have that!", 'Why?', "This makes no sense!",
    function() { talkTwo3half2(); },
    function() { talkTwo3half2(); }
  );
}
function talkTwo3half2 () {
  popoverNeb.classList.remove("saturate"); 
  showNebAsking(
    "So I've created a new curency...", 'What is it!', "I must know!",
    function() { talkTwo4(); },
    function() { talkTwo4(); }
  );
}
function talkTwo4() {
  
  coinElement.style.visibility = "visible";
  
  coinElement.classList.remove("greenFlashr")
  void coinElement.offsetWidth
  coinElement.classList.add("greenFlashr")
  // popoverNeb.classList.add("contrast");
  showNebAsking(
    '<h1 style = "font-size: 3.5vw;">NebCoin!</h1>', 'WOW!', "Oh me gorsh!",
    function() { talkTwo4half(); },
    function() { talkTwo4half(); }
  );
}
function talkTwo4half () {
  // popoverNeb.classList.remove("contrast");
  gramsElement.classList.remove("greenFlashr")
  void gramsElement.offsetWidth
  gramsElement.classList.add("greenFlashr")
  showNebAsking(
    "LOOK!  <br>You have "+Math.round(grams).toExponential(3).replace(/e\+?/, ' x 10^') +" g grams...", 'Ok?', "Yeah?",
    function() { talkTwo5() },
    function() { talkTwo5() }
  );
}
function talkTwo5() {
  coinElement.classList.remove("greenFlashr")
  
  popoverNeb.classList.add("invert");
  showNebAsking(
    "And "+nebCoins+" NebCoin.  ", 'How can I get NebCoin?', "I want made up money!",
    function() { talkTwo6() },
    function() { talkTwo6() }
  );
}
function talkTwo6() {
  popoverNeb.classList.remove("invert");

  showNebAsking(
    "Wana get NebCoin?", 'Yes?', "No.",
    function() { talkTwo7(); },
    function() { talkTwo7(); }
  );
}
function talkTwo7() {
  // popoverNeb.classList.remove("invert");
  showNebAsking(
    "Wana hire children to do the work for you for the rest of their lives for the <b>ONE TIME PRICE</b> of one NebCoin?", 'Yes?', "No.",
    function() { talkTwo8(); },
    function() { talkTwo8(); }
  );
}
function talkTwo8() {
  popoverNeb.classList.remove("invert");
  didTalk = 2;
  setCookie("didTalk", didTalk, 256);
  prestige.style.visibility = "visible";
  showNebAsking(
    "Well give that shop button a big ol' press and take in the <i>wafting</i> smell of capitalism!", 'Ok.', "Shop button?",
    function() { popoverNeb.style.display = "none"; },
    function() { popoverNeb.style.display = "none"; }
  );
}
function talkThree1() {

  showNebAsking(
    "That button that says 'Create New Lab' you know... <br>it creates a new lab.' ", 'Ok?', "I know.",
    function() { talkThree2() },
    function() { talkThree2() }
  );
}
function talkThree2() {

  showNebAsking(
    "You know, just saying.  Just in case...", 'Ok.', "Ok!",
    function() { talkThree3() },
    function() { talkThree3() }
  );
}
function talkThree3() {

  showNebAsking(
    "Ok, you can go now.  ", 'Ok.', "Finaly!  Freedom!",
    function() { popoverNeb.style.display = "none"; talkThree4()},
    function() { popoverNeb.style.display = "none"; talkThree4()}
  );
}
function talkThree4() {
 if (getCookie("timeOut") == true) {
   setCookie("timeOut", true, 256);
  setTimeout(function() {
    showNebAsking(
      "I know I said I would go <br><b>but</b> <br>that button down there... <br>create new lab...", 'Ok.', "NO!  NOT AGAIN!",
      function() {talkThree5() },
      function() { talkThree5() }
    );
  }, 9000);
 }
}
function talkThree5() {

  showNebAsking(
    "It creates a new lab...  <br><br>Yeah, you can go now.  ", 'Ok.', "Finaly!  Freedom!",
    function() { popoverNeb.style.display = "none"; },
    function() { popoverNeb.style.display = "none"; }
  );
}
function talkFour1() {

  showNebAsking(
    "You want more NebCoin, right?", 'Yeah!', "I'de rather go to Simi High.",
    function() { talkFour2() },
    function() { talkFour2() }
  );
}
function talkFour2() {

  showNebAsking(
    "And it sucks that you have to sell ALL of your labs to get some?", 'Yeah!', "Guess who'se fualt that is.  Yours.",
    function() { talkFour3() },
    function() { talkFour3() }
  );
}
function talkFour3() {

  showNebAsking(
    "I am adding in an ability to sell ONE lab at a time instead of all of them!  This will be in a NEW OPTIONS MENU!", 'YAYEEEEEE!', "I pood my pants.  ",
    function() { talkFour4() },
    function() { talkFour4() }
  );
}
function talkFour4() {
  didTalk = 63;
  setCookie("didTalk", didTalk, 256);

  showNebAsking(
    "I'm just gonna refresh you page <br>(your progress should save if cookies enabled) <br>and the updates will apply!", 'Ok.', "Finaly!  Freedom!",
    function() { popoverNeb.style.display = "none"; location.reload(); },
    function() { popoverNeb.style.display = "none"; location.reload(); }
  );
}






function talkFinal1() {

  showNebAsking(
    "You beat the game.", 'YAYEEEEEE!', "(incomprehensible screeching)",
    function() { talkFinal2() },
    function() { talkFinal2() }
  );
}
function talkFinal2() {

  showNebAsking(
    "That is amazing!", 'I know, I am cool!', "It was easy!",
    function() { talkFinal3() },
    function() { talkFinal3() }
  );
}
function talkFinal3() {

  showNebAsking(
    "It would be a shame if all of you progress was deleted...", 'Wait...?', "I don't like where this is going.",
    function() { rutRoh() },
    function() { rutRoh() }
  );
}