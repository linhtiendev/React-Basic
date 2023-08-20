import logo from "./logo.svg";
import "./App.scss";
import TestComponent from "./Example/TestComponent";
import ListTodo from "./Todos/ListTodo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Todo App </p>
                {/* <TestComponent /> */}
                <ListTodo />
            </header>
        </div>
    );
}

export default App;
