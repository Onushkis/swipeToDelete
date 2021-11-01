let jokeItem = document.querySelector(".jokeItem");
let touchCordinateStart;
let touchCordinateMove;
let deleteButtonContainer = (window.screen.width * 40) / 100;

jokeItem.addEventListener("touchstart", (e) => {
 touchCordinateStart = e.touches[0].clientX;
});

jokeItem.addEventListener("touchmove", (e) => {
    touchCordinateMove = Math.floor(e.touches[0].clientX);
  
  
    if(touchCordinateMove < touchCordinateStart  && 
    touchCordinateMove > touchCordinateStart - deleteButtonContainer
    ){
    jokeItem.style.transform = `translateX(${
    touchCordinateMove - touchCordinateStart}px)`;

  }

});

