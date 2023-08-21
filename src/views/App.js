import "./App.scss";

import TestComponent from "./Example/TestComponent";
import ListTodo from "./Todos/ListTodo";

import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/todo">
                            <ListTodo />
                        </Route>
                        <Route path="/about">
                            <TestComponent />
                        </Route>
                    </Switch>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
