let jokeItem = document.querySelector(".jokeItem");
let touchCordinateStart;
let touchCordinateMove;
let touchCordinateEnd;
let deleteButtonContainer = (window.screen.width * 40) / 100;

//delete all
document.querySelector(".deleteItem").addEventListener("click", () => {
    document.querySelector(".DeletAnimation").classList.add("animate__fadeOutLeft");

    //timeOut

    setTimeout(() => {
        document.querySelector(".DeletAnimation").classList.add("collapsed");
   
    },800);

setTimeout(() => {
    document.querySelector(".DeletAnimation").remove();

},900);
});  

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

jokeItem.addEventListener("touchend", (e) => {
touchCordinateEnd = Math.floor(e.changedTouches[0].clientX);

if ( touchCordinateEnd < touchCordinateStart - deleteButtonContainer / 2){
jokeItem.style.transform = `translateX(-${deleteButtonContainer}px)`;
}else{
    jokeItem.style.transform = `translateX(${e.target.offsetLeft})`;
}
    
});


//deleted

