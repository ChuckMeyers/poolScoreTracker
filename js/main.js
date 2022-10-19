//onClick replace ball image src with grey image
//initialize variables for dom interaction with images

let oneBall = document.getElementById("oneBall")
let twoBall = document.getElementById("twoBall")
let threeBall = document.getElementById("threeBall")
let fourBall = document.getElementById("fourBall")
let fiveBall = document.getElementById("fiveBall")
let sixBall = document.getElementById("sixBall")
let sevenBall = document.getElementById("sevenBall")
let eightBall = document.getElementById("eightBall")
let nineBall = document.getElementById('nineBall')

oneBall.addEventListener("click", test)

function test() {
    if(oneBall.src="colorBallImgs/oneball.jpg"){
        oneBall.src="colorBallImgs/oneballgrey.jpg";
    }
}








// function greyReplacement() {
//    if(oneBall.src="colorBallImgs/oneball.jpg") {
//     oneBall.src="colorBallImgs/oneballgrey.jpg";
//    }else{
//     oneBall.src="colorBallImgs/oneball.jpg";
//    }
   
// }
