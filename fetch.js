axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  const users = response.data;
  console.log(`GET users`, users);
});



