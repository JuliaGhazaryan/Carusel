const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
let timerId;

let pictures =["1.jpg", "2.jpg", "3.jpg", "4.jpg"]


img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);



btnPlay.addEventListener("click", function(){
    clearInterval(timerId)
    timerId = setInterval(moveRight, 2000)
});
btnPause.addEventListener("click", function(){
    clearInterval(timerId)
})