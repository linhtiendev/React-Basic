import "./App.scss";

import TestComponent from "./Example/TestComponent";
import ListTodo from "./Todos/ListTodo";
import ListUser from "./Users/ListUser";
import UserDetail from "./Users/UserDetail";

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
                        {/* Dùng tag Switch khi muốn render chính xác route trên giao diện */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/todo">
                            <ListTodo />
                        </Route>
                        <Route path="/about">
                            <TestComponent />
                        </Route>
                        <Route path="/user" exact>
                            <ListUser />
                        </Route>
                        {/* dùng dấu : để lấy được tham số */}
                        <Route path="/user/:id">
                            <UserDetail />
                        </Route>
                    </Switch>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
