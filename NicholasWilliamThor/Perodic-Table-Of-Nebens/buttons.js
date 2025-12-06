function mechineNew(curentLabNum, lvl, labGroup) {
  let mechine = document.createElement('div');
    mechine.classList.add('machine');
    console.log("lvl: "+lvl)
    
    console.log("Lab Cost: " + lab[curentLabNum].cost)
    labGroup.appendChild(mechine);
    lab[curentLabNum].mechine = mechine;
    mechineHTML (curentLabNum, lvl)

  
    // let bar = document.createElement('div');
    
    // bar.classList.add('bar');
    // // bar.innerHTML = "x% left";
    // labGroup.appendChild(bar);
    // lab[curentLabNum].bar = bar;
    // bar.style.backgroundSize = "" + Math.round(((lab[curentLabNum].cost - grams)/lab[curentLabNum].cost)*100) + "% 100%";
  
}
function mechineHTML (curentLabNum, lvl) {
  lab[curentLabNum].mechine.innerHTML = '<button class="btn txt" onclick ="upgradeElement(' + curentLabNum + ')" style = "transition-duration: 0.5s;"> Upgrade To ' + element(lvl + 1).symbol + ' <br> ' + lab[curentLabNum].cost.toExponential(3).replace(/e\+?/, ' x 10^') + ' g</button> <h1 class = "txt">' + element(lvl).name + '</h1> ';
  lab[curentLabNum].bar = lab[curentLabNum].mechine.firstChild;

  //  <img class="bhorModel" src="' + element(lvl).bohr_model_image + '" alt="oh no it no load big sad">

  
  
}


function buttonNew(curentLabNum, lvl, labGroup) {
  
  let button = document.createElement('div');
    button.classList.add('clickr');
    button.innerHTML = 
  // botton.style.fontSize = "2vw"
    labGroup.appendChild(button);
    lab[curentLabNum].button = button;
  buttonHTML (curentLabNum, lvl)
  
}
function buttonHTML (curentLabNum, lvl) {
  lab[curentLabNum].button.innerHTML = ' <button class="btn pressr" onclick="press(' + lvl + ', 1 ,'+curentLabNum+');"> 1 <br> mol/click <br> = <br> '+Math.round(element(lvl).atomic_mass*1000)/1000+' g</button>'
}

