import "./css/Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const TodoList = () => {

    const [todo, setTodo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

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
            }
        ])
        setTodo("");
    }

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
              <label className="lable" htmlFor="">Add Your Todo</label>
            </div>
            <input type="text" placeholder="Add new task..." />
            <button type="submit" className="addBtn">Add Task</button>
          </form>
        </div>
        <div>
            <ul className="Todo-List">
                <li>{todo.id}</li>
                <div>
                    <FontAwesomeIcon className="editBtn" icon={faPenToSquare} />
                    <FontAwesomeIcon className="deleteBtn" icon={faTrash} />
                </div>
            </ul>
        </div>
      </main>
    </div>
  );
};

export default TodoList;
