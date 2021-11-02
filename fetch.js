
axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  const users = response.data;
  const jokeWrapper = document.querySelector("jokeWrapper");
    const section = document.createElement("section", {className: 'animate__animated'});
  const deleteItem = document.createElement("div", {className: 'deleteItem'});
  const jokeItem = document.createElement("artickle", {className: 'jokeItem'});
//   console.log(`GET users`, users);
//   const joke = document.createTextNode(users[0].name);
  jokeItem. textContent = users[0].name;
});


