
const container = document.querySelector("#container");
container.classList.add('container');

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = "Keyboard Drumkit";
container.appendChild(title);

const keybox = document.createElement('div');
keybox.classList.add('keybox');


for(i = 0; i<9; i++){
    let key = document.createElement('div');
    key.classList.add('key');
    keybox.appendChild(key);

}
  

const key = keybox.childNodes;
container.appendChild(keybox);





function keySetup(keyItem, letter, kitComponent){
    keyItem.setAttribute('id',letter.toLowerCase());
    let componentName = document.createElement('div');
    let keyLetter = document.createElement('div');
    keyLetter.textContent = letter;
    keyLetter.classList.add('keyLetter');
    componentName.textContent = kitComponent;
    componentName.classList.add('componentName');
    keyItem.appendChild(keyLetter);
    keyItem.appendChild(componentName);
    keyItem.addEventListener('click', () => keyAnimation(keyItem));
    keyItem.addEventListener('click',() =>playSound(keyItem.id));
    //keyItem.style.cssText = 'display: flex; flex-direction: column;'
}

window.addEventListener('keydown', (e) => getKeyItem(e));
window.addEventListener('keydown',(e) => playSound(e.key));


function getKeyItem(e){
    let keyItem = document.getElementById(e.key);
    keyAnimation(keyItem);
}

function keyAnimation(keyItem){
    keyItem.classList.add('playing');
    setTimeout(function(){
        keyItem.classList.remove('playing');
    },100);
    //keyItem.style.cssText = 'transition-delay: 0.3s; width: 75px; height: 75px; background: gray; display: flex; flex-direction: column; justify-content: center; transition-duration: 0.1s; align-items: center; color: white; border-radius: 10px; border: black; border-style: solid';
}

function playSound(key){
    let sound;
    switch (key){
        case 'a':
            sound = 'sounds/clap.wav';
            break;
        case 's':
            sound = 'sounds/hihat.wav';
            break;
        case 'd':
            sound = 'sounds/kick.wav';
            break;
        case 'f':
            sound = 'sounds/openhat.wav';
            break;
        case 'g':
            sound = 'sounds/boom.wav';
            break;
        case 'h':
            sound = 'sounds/ride.wav';
            break;
        case 'j':
            sound = 'sounds/snare.wav';
            break;
        case 'k':
            sound = 'sounds/tom.wav';
            break;
        case 'l':
            sound = 'sounds/tink.wav';
            break;          

    }
    if(!sound) return;
    const drumSound = new Audio(sound);
    drumSound.currentTime = 0;
    drumSound.play();
}



function keyAnimationStop(keyItem){
    keyItem.classList.remove('playing');
}


keySetup(key[0], 'A', 'clap');
keySetup(key[1], 'S', 'hihat');
keySetup(key[2], 'D', 'kick');
keySetup(key[3], 'F', 'open hat');
keySetup(key[4], 'G', 'boom');
keySetup(key[5], 'H', 'ride');
keySetup(key[6], 'J', 'snare');
keySetup(key[7], 'K', 'tom');
keySetup(key[8], 'L', 'tink');


