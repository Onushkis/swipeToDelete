let jokeItem = document.querySelector(".jokeItem");
let touchCordinate;
let touchCordinateMove;

jokeItem.addEventListener("touchstart", (e) => {
 touchCordinate = e.touches[0].clientY;
});

jokeItem.addEventListener("touchmove", (e) => {
    touchCordinateMove = Math.floor(e.touches[0].clientX);
jokeItem.style.transform = `translateX(${touchCordinateMove}px)`;

});

