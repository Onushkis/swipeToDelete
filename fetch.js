axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  const users = response.data;

  users.forEach((user) => {
    const jokeWrapper = document.querySelector(".jokeWrapper");

    const section = document.createElement("section");
    section.classList.add("animate__animated", "DeletAnimation");

    const deleteItem = document.createElement("div");
    deleteItem.classList.add("deleteItem");

    const jokeItem = document.createElement("article");
    jokeItem.classList.add("jokeItem");

    section.appendChild(deleteItem);
    section.appendChild(jokeItem);
    jokeWrapper.appendChild(section);

    jokeItem.textContent = user.name;
  });
});
