
const moles = document.querySelectorAll('.mole');
const gamescreen = document.querySelector('.background');
const winnerscreen = document.querySelector('.winner');
const worm = document.querySelector('.worm-container');
let score = 0;
let royalcount = 0;

function setupMoles(moles) {
    let molesArray = [];
    let molesObj = {};
    for (let i = 0; i < moles.length; i++) {
            moles[i].addEventListener("click", function() {
                if (moles[i].classList.contains("royal")) {
                    score = score + 2;
                    moles[i].classList.add('fed-royal');   
                    setTimeout(1000);   
                    moles[i].classList.add('leaving-royal');
                    
                } else {
                    score++;
                    moles[i].classList.add('fed-mole');   
                    setTimeout(1000);
                    moles[i].classList.add('leaving-mole');       
                }
                
                worm.style.width = (score * 10) + '%';
                if (score === 10) {
                    gamescreen.classList.add('hide');
                    winnerscreen.classList.remove('hide');
                }
            });

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
        moles[i].removeAttribute("class");
        moles[i].classList.add('mole');
        royalcount++;
        if (royalcount === 10) {
            moles[i].classList.add('royal');
            royalcount = 0;
        } else {
            
        }
        moles[i].classList.remove('hide');
        molesArray[i].lastAppeared = Date.now();
    }
}

}

function init() {

  
    const molesArray =  setupMoles(moles);
    setInterval(function() {displayMoles(moles, molesArray)}, 2000);

}

init();