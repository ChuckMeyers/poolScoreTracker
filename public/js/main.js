
//initialize variables for dom interaction with images
const oneBall = document.getElementById("oneBall");
const twoBall = document.getElementById("twoBall");
const threeBall = document.getElementById("threeBall");
const fourBall = document.getElementById("fourBall");
const fiveBall = document.getElementById("fiveBall");
const sixBall = document.getElementById("sixBall");
const sevenBall = document.getElementById("sevenBall");
const eightBall = document.getElementById("eightBall");
const nineBall = document.getElementById('nineBall');


// Display color ball images
oneBall.src="colorBallImgs/oneball.jpg";
twoBall.src="colorBallImgs/twoball.jpg";
threeBall.src="colorBallImgs/threeball.jpg";
fourBall.src="colorBallImgs/fourball.jpg";
fiveBall.src="colorBallImgs/fiveball.jpg";
sixBall.src="colorBallImgs/sixball.jpg";
sevenBall.src="colorBallImgs/sevenball.jpg";
eightBall.src="colorBallImgs/eightball.jpg";
nineBall.src="colorBallImgs/nineball.jpg";

// Listener for ball img change
oneBall.addEventListener("click", greyOne);
twoBall.addEventListener("click", greyTwo);
threeBall.addEventListener("click", greyThree);
fourBall.addEventListener("click", greyFour);
fiveBall.addEventListener("click", greyFive);
sixBall.addEventListener("click", greySix);
sevenBall.addEventListener("click", greySeven);
eightBall.addEventListener("click", greyEight);
nineBall.addEventListener("click", greyNine);

// Functions to handle switch between color/grey/dead when ball is clicked
function greyOne() {
    if(oneBall.src.match('oneballgrey')){
        oneBall.src=`colorBallImgs/oneballdead.jpg`;
    } else if(oneBall.src.match('oneballdead')){
        oneBall.src="colorBallImgs/oneball.jpg"
    }
    else {
        oneBall.src=`colorBallImgs/oneballgrey.jpg`;
    }
}
function greyTwo() {
    if(twoBall.src.match('twoballgrey')){
        twoBall.src=`colorBallImgs/twoballdead.jpg`;
    }else if(twoBall.src.match('twoballdead')) {
        twoBall.src="colorBallImgs/twoball.jpg"
    }else{
        twoBall.src=`colorBallImgs/twoballgrey.jpg`;
    }
}
function greyThree() {
    if(threeBall.src.match('threeballgrey')){
        threeBall.src=`colorBallImgs/threeballdead.jpg`;
    }else if(threeBall.src.match('threeballdead')) {
        threeBall.src=`colorBallImgs/threeball.jpg`
    }else{
        threeBall.src=`colorBallImgs/threeballgrey.jpg`;
    }
}
function greyFour() {
    if(fourBall.src.match('fourballgrey')){
        fourBall.src=`colorBallImgs/fourballdead.jpg`;
    }else if(fourBall.src.match('fourballdead')){
        fourBall.src=`colorBallImgs/fourball.jpg`
    }else{
        fourBall.src=`colorBallImgs/fourballgrey.jpg`;
    }
}
function greyFive() {
    if(fiveBall.src.match('fiveballgrey')){
        fiveBall.src=`colorBallImgs/fiveballdead.jpg`;
    }else if(fiveBall.src.match('fiveballdead')){
        fiveBall.src=`colorBallImgs/fiveball.jpg`;
    }else{
        fiveBall.src=`colorBallImgs/fiveballgrey.jpg`;
    }
}
function greySix() {
    if(sixBall.src.match('sixballgrey')){
        sixBall.src=`colorBallImgs/sixballdead.jpg`;
    }else if(sixBall.src.match('sixballdead')){
        sixBall.src=`colorBallImgs/sixball.jpg`
    }else{
        sixBall.src=`colorBallImgs/sixballgrey.jpg`;
    }
}
function greySeven() {
    if(sevenBall.src.match('sevenballgrey')){
        sevenBall.src=`colorBallImgs/sevenballdead.jpg`;
    }else if(sevenBall.src.match('sevenballdead')){
        sevenBall.src=`colorBallImgs/sevenball.jpg`;
    }else{
        sevenBall.src=`colorBallImgs/sevenballgrey.jpg`;
    }
}
function greyEight() {
    if(eightBall.src.match('eightballgrey')){
        eightBall.src=`colorBallImgs/eightballdead.jpg`;
    }else if(eightBall.src.match('eightballdead')){
        eightBall.src=`colorBallImgs/eightball.jpg`;
    }else{
        eightBall.src=`colorBallImgs/eightballgrey.jpg`;
    }
}
function greyNine() {
    if(nineBall.src.match('nineballgrey')){
        nineBall.src=`colorBallImgs/nineball.jpg`;
    } else{
        nineBall.src=`colorBallImgs/nineballgrey.jpg`;
    }
}

// Fetch to display player's name and balls needed in the respective h2.
document.querySelector('#player-one-submit').addEventListener('click', pOneApiRequest)
document.querySelector('#player-two-submit').addEventListener('click', pTwoApiRequest)

async function pOneApiRequest(){
    const playerName = document.querySelector('.player-one-name-input').value
    try{
        const response = await fetch(`https://twin-peaks-freaks-api.herokuapp.com/api/${playerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.pOneName').innerText = `${data.firstName} needs ${data.targetNumber}`
    }catch(error){
        console.log(error)
    }
}

async function pTwoApiRequest(){
    const playerName = document.querySelector('.player-two-name-input').value
    try{
        const response = await fetch(`https://twin-peaks-freaks-api.herokuapp.com/api/${playerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.pTwoName').innerText = `${data.firstName} to make ${data.targetNumber}`
    }catch(error){
        console.log(error)
    }
}

// Make increment and decrement buttons add/subtract from players' total score
let pOneCurrentScore = 0;
let pTwoCurrentScore = 0;
let playerOneScore = document.querySelector('.playerOneScore');
let playerTwoScore = document.querySelector('.playerTwoScore');

document.querySelector('.pOneIncrement').addEventListener('click', pOneIncrement);
document.querySelector('.pOneDecrement').addEventListener('click', pOneDecrement);
document.querySelector('.pTwoIncrement').addEventListener('click', pTwoIncrement);
document.querySelector('.pTwoDecrement').addEventListener('click', pTwoDecrement);
function pOneIncrement (){
    pOneCurrentScore++
    playerOneScore.innerHTML = `${pOneCurrentScore}`;
}
function pOneDecrement(){
    pOneCurrentScore--
    playerOneScore.innerHTML = `${pOneCurrentScore}`;
}
function pTwoIncrement(){
    pTwoCurrentScore++
    playerTwoScore.innerHTML = `${pTwoCurrentScore}`;
}
function pTwoDecrement(){
    pTwoCurrentScore--
    playerTwoScore.innerHTML = `${pTwoCurrentScore}`;
}

// Have Re-rack button reassign img.src to color images
function reRack(){
    oneBall.src="colorBallImgs/oneball.jpg"
    twoBall.src="colorBallImgs/twoball.jpg"
    threeBall.src="colorBallImgs/threeball.jpg"
    fourBall.src="colorBallImgs/fourball.jpg"
    fiveBall.src="colorBallImgs/fiveball.jpg"
    sixBall.src="colorBallImgs/sixball.jpg"
    sevenBall.src="colorBallImgs/sevenball.jpg"
    eightBall.src="colorBallImgs/eightball.jpg"
    nineBall.src="colorBallImgs/nineball.jpg"
}
document.querySelector(".reRack").addEventListener('click', reRack);

// Have the new game button reset images, scores, and make all inputs visible again.
function newGame(){
    if(window.confirm('Are you sure you want to start a new game?')){
        reRack();
        pOneCurrentScore = 0;
        pTwoCurrentScore = 0;
        playerOneScore.innerHTML = `${pOneCurrentScore}`;  
        playerTwoScore.innerHTML = `${pTwoCurrentScore}`;
        document.querySelector('.pOneName').innerText = '';
        document.querySelector('.pTwoName').innerText = '';

    }else {
        return
    };

}
document.querySelector('#newGame').addEventListener('click', newGame)














