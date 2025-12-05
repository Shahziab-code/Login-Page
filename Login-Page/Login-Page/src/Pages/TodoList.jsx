import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./css/Todo.css";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("userLoggedIn");
    if (!isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/");
    }
  }, []);

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
    setEditingId(id);
    setEditText(taskToEdit.todo);
  };
  const saveEdit = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, todo: editText } : item
    );
    setTasks(updatedTasks);
    setEditingId(null);
    setEditText("");
  };
  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="dash-wrap">
      <main className="main">
        <h1>Todo List</h1>
        <div className="todo-container">
          <form onSubmit={handleSubmit} className="form">
            <div className="lablediv">
              <label className="lable" htmlFor="">
                Add Your Todo
              </label>
            </div>
            <input
              type="text"
              placeholder="Add new task..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              required
            />
            <button type="submit" className="addBtn">
              Add Task
            </button>
          </form>
        </div>
        <div>
          {tasks.map((items) => (
            <ul className="Todo-List">
              <li key={items.id} className="todoItems">
                {editingId === items.id ? (
                  <input
                    className="editTaskInput"
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => saveEdit(items.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit(items.id);
                    }}
                    autoFocus
                  />
                ) : (
                  <li className="taskText">{items.todo}</li>
                )}
                <span className="taskTime">{items.time}</span>
                <div>
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
              </li>
            </ul>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TodoList;
