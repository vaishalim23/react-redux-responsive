import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../Store/todoListSlice";
import "./Todolist.style.css";
import todoImg from "../Images/todo-image.jpg";
import socialImg from "../Images/twitter.png";
import insta from "../Images/insta.jfif";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, status } = useSelector((state) => state.todoList);
  // console.log(todoList);
  return (
    <div>
      <div class="main-div">
        {todos.length === 0 && (
          <div class="sub-div">
            <h2>Todo-list</h2>
            <button
              onClick={() => {
                dispatch(getTodos());
              }}
            >
              Get Todos!
            </button>
            <p>{status}</p>
          </div>
        )}
        <ul>
          {todos.length !== 0 && (
            <div>
              <table>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
                {todos.map((todo, i) => {
                  return (
                    <tr key={i}>
                      <td>{todo.id}</td>
                      <td>{todo.name}</td>
                      <td>{todo.email}</td>
                      <td>{todo.phone}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          )}
        </ul>
        {todos.length !== 0 && (
          <div>
            <img src={todoImg} alt="todo"></img>
          </div>
        )}
      </div>
      {todos.length !== 0 && (
        <div className="dummy-text">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      )}
      <footer class="footer">
        <p class="footer-company-about">
          <span>About the company</span>
          &nbsp;We offer training and skill building courses across Technology,
          Design, Management, Science and Humanities.
        </p>
        <div class="footer-icons">
          <img src={socialImg} alt="footer" class="twitter"></img>
          <img src={insta} alt="" class="insta" />
        </div>
      </footer>
    </div>
  );
};

export default TodoList;
