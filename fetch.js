axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  const users = response.data;

  users.forEach((user) => {
    const jokeWrapper = document.querySelector(".jokeWrapper");
    let joke = document.createTextNode(user.name);

    const section = document.createElement("section");
    section.classList.add("animate__animated", "DeletAnimation");
    section.setAttribute("id", user.id); // id definere til slet

    const deleteItem = document.createElement("div");
    deleteItem.classList.add("deleteItem");

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash", "fa-2x");

    const SwipeItem = document.createElement("article");
    SwipeItem.classList.add("SwipeItem");

    deleteItem.appendChild(deleteIcon);
    section.appendChild(deleteItem);
    section.appendChild(SwipeItem);
    jokeWrapper.appendChild(section);
    SwipeItem.appendChild(joke);
  });
});

// -------------------------------------All from Index.JS

let SwipeItem = document.querySelector(".SwipeItem");
let touchCoordinateStart;
let touchCoordinateMove;
let touchCoordinateEnd;
let deleteButtonContainer = (window.screen.width * 40) / 100;
let trash = []; // Til local storage

console.log(trash);

// let foo = e 

//-------------------------------- Touch Start
document.querySelector(".jokeWrapper").addEventListener("touchstart", (e) => {
  let touchElement;
  touchElement = e.target;
  parentElement = e.target.parentElement;
  touchCoordinateStart = Math.floor(e.touches[0].clientX);

  //-------------------------------- Touch Move

  document.querySelector(".jokeWrapper").addEventListener("touchmove", (e) => {
    if (touchElement.tagName === "ARTICLE") {
      touchCoordinateMove = Math.floor(e.touches[0].clientX);

      if (
        touchCoordinateMove < touchCoordinateStart &&
        touchCoordinateMove > touchCoordinateStart - deleteButtonContainer
      ) {
        touchElement.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart
          }px)`;
      }
    }
  });

  //-------------------------------- Touch End

  touchElement.addEventListener("touchend", (e) => {
    touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);
    document.querySelector(".jokeWrapper")
    if (touchCoordinateEnd < touchCoordinateStart - deleteButtonContainer / 2) {
      touchElement.style.transform = `translateX(-${deleteButtonContainer}px)`;

    } else {
      touchElement.style.transform = `translateX(${e.target.offsetLeft})`;
    }
  });

  //-------------------------------------DeletedItem

  parentElement.querySelector(".deleteItem").onclick = (e) => {

      // trash.push(userObject);

    // console.log(trash);

   /*  let userid = parentElement.id; // --------- Helps to save id
    let userName = parentElement.querySelector(".SwipeItem").textContent; */

    let userObject = {
      id: parentElement.id,
      name: parentElement.querySelector(".SwipeItem").textContent,
    };

    trash = trash.filter((item) => userObject.id != item.id);
    if (trash.length > 0 ){
      localStorage.setItem( ".deleteItem", JSON.stringify(trash));
    } else {
      localStorage.clear();
    }


    //

    //-------------------------------- Time Out
    if (touchElement != deleteButtonContainer) {
      parentElement.classList.add("animate__fadeOutLeft");
      setTimeout(() => {
        parentElement.classList.add("collapsed");
      }, 800);

      setTimeout(() => {
        parentElement.remove();
      }, 900);
    }
  };
});

