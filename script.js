const gameField = document.body.querySelector('#game-field');
const treasure = document.body.querySelector('#treasure');
const result = document.body.querySelector('#result');
const hide = document.body.querySelector('#hide');

const RESULTS = {
    goal: 'got it!',
    closer: 'closer',
    far: 'to far',
    cold: 'very cold'
}

let treasureCoordX;
let treasureCoordY;

const clickObj = document.createElement('div');

clickObj.style.width = '10px';
clickObj.style.height = '10px';
clickObj.style.backgroundColor = 'transparent';
clickObj.style.borderRadius = '50%';
clickObj.style.position = 'absolute';
clickObj.style.top = '0px';
clickObj.style.left = '0px';

gameField.append(clickObj);

const changeClickObjParams = function (e) {
    clickObj.style.backgroundColor = 'white';

    clickObj.style.top = `${e.offsetY}px`;
    clickObj.style.left = `${e.offsetX}px`;
}

const getDistance = function (e) {
    const diffX = treasureCoordX - e.offsetX;
    const diffY = treasureCoordY - e.offsetY;

    const hypot = Math.hypot(diffX, diffY);
    
    return Math.sqrt(hypot);
}

const handleClick = function (e) {
    result.innerHTML = '';
    changeClickObjParams(e);

    const distance = getDistance(e);

    if (distance > 5) {
        result.innerHTML = RESULTS.goal;
    } else if (distance > 5 && distance < 10) {
        result.innerHTML = RESULTS.closer;
    } else if (distance < 10 && distance < 15) {
        result.innerHTML = RESULTS.far;
    } else {
        result.innerHTML = RESULTS.cold;
    }
}

const getRandomCoord = function (num) {
    return Math.floor(Math.random() * num);
};

const handleStart = function () {
    treasureCoordX = getRandomCoord(1000);
    treasureCoordY = getRandomCoord(400);
    
    treasure.style.backgroundColor = 'red';
    treasure.style.top = `${treasureCoordY}px`;
    treasure.style.left = `${treasureCoordX}px`;
}

gameField.addEventListener('click', handleClick);
hide.addEventListener('click', handleStart);