import { useEffect, useState } from "react";
import "./css/Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

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
    setTodo("");
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (savedTasks.length && tasks.length === 0) {
      setTasks(savedTasks);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setTasks(filteredTasks);
  };

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
            <p
              className={`taskText ${
                expandedId === items.id ? "expanded" : ""
              }`}
              onClick={() =>
                setExpandedId(expandedId === items.id ? null : items.id)
              }
            >
              {items.todo}
            </p>
            <span className="taskTime">{items.time}</span>
            <div className="taskButtons">
              <FontAwesomeIcon
                className="editBtn"
                icon={faPenToSquare}
                onClick={() => handleEdit(items.id)}
              />
              <FontAwesomeIcon
                className="deleteBtn"
                icon={faTrash}
                onClick={() => handleDelete(items.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
