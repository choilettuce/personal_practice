const url = "https://jsonplaceholder.typicode.com/todos";

const todo = {
  title: "A new todo",
  completed: false,
};

axios
  .post(url, {
    headers: {
      "Content-Type": "application/json",
    },
    data: todo,
  })
  .then(console.log);