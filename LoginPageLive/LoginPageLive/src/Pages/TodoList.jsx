import "./css/Todo.css";

const TodoList = () => {
  return (
    <>
      <div className="container">
        <div className="todoContainer">
          <h1>Todo List Page</h1>
          <div className="todoInput">
            <input type="text" placeholder="Enter your task here..." />
            <button className="BlueBtn">Add Task</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
