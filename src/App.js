import "./App.css";
// import Counter from './components/Counter';
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="app-container">
      <div className="task-list-wrapper">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
