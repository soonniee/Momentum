const body = document.querySelector("body");
const IMG_NUMBER = 3;
function paintImage(imgNumber){
    const img = new Image();
    img.src=`images/back${imgNumber}.jpg`;
    console.log(img.src);
    img.classList.add("bgimg");
    body.appendChild(img);
}
function genRandom(){
    const number = Math.floor(Math.random()*3);
    return number;
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();