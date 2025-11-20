import { useState } from "react";
import "./css/Todo.css";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    const nowTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        todo,
        iscompleted: false,
        time: nowTime,
      },
    ]);
    console.log("Task Added:", todo);
    setTodo("");
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((item) => item.id === id);
    if (!taskToEdit) return;

    const newValue = prompt("Edit your task:", taskToEdit.todo);
    if (!newValue) return;

    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, todo: newValue } : item
    );

    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((item) => item.id !== id)
  }

  return (
    <div className="container">
      <div className="todoContainer">
        <h1>Todo List Page</h1>

        <form className="todoInput" onSubmit={handleSubmit}>
          <input
            className="todoTextInput"
            type="text"
            placeholder="Enter your task here..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
          />

          <button type="submit">Add Task</button>
        </form>
      </div>
      <div className="taskBox">
        {tasks.map((items, index) => (
          <div className="taskRaw" key={items.id}>
            <p>{items.todo}</p>
            <span>{items.time}</span>
            <div className="taskButtons">
              <button onClick={() => handleEdit(items.id)}>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
