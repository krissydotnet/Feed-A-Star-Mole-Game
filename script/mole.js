
function setupMoles(moles) {
    let molesArray = [];
    let molesObj = {};
    for (let i = 0; i < moles.length; i++) {
            moles[i].classList.add('hide');
            molesObj.state = "hungry"
            molesObj.lastAppeared =  Date.now();
            molesArray.push(molesObj);
    }
    return molesArray;
}

function displayMoles(moles, molesArray) {
for (let i = 0; i < moles.length; i++) {
    let randomNumber = Math.random();
    if (randomNumber > .5) {
        moles[i].classList.add('hide');
    } else {
        moles[i].classList.remove('hide');
        molesArray[i].lastAppeared = Date.now();
    }
}
console.log(molesArray);
}

function init() {
    const moles = document.querySelectorAll('.mole');
  
    const molesArray =  setupMoles(moles);
    console.log(molesArray);
    setInterval(function() {displayMoles(moles, molesArray)}, 2000)
    
}

init();