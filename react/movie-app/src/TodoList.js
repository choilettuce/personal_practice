import {useState} from "react";

function TodoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray])
    console.log(toDos);
  }
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to"/>
      <button>Add to Do</button> 
      </form>
      <hr />
      {toDos.map((item, index) => (<li key={index}>{item}</li>))}
    </div>
  );
}

export default TodoList;
