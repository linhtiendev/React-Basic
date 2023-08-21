import React from "react";
import InputTodo from "./ChildTodo/InputTodo";
import ListInputTodo from "./ChildTodo/ListInputTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ListTodo extends React.Component {
    state = {
        arrList: [
            { id: 123123, name: "Liti", class: "19HTD1C" },
            { id: 123789, name: "Mini", class: "19HTD1C" },
        ],
    };

    addNewUser = (list) => {
        this.setState({
            arrList: [...this.state.arrList, list],
        });
        toast.success("Created a user!"); // Toastify
    };

    deleteAList = (list) => {
        this.setState({
            arrList: [
                ...this.state.arrList.filter((item) => item.id !== list.id),
            ],
        });
        toast.success("Deleted a user!"); // Toastify
    };

    render() {
        return (
            <>
                <p>Todo App </p>
                <InputTodo addNewUser={this.addNewUser} />
                <ListInputTodo
                    arrList={this.state.arrList}
                    deleteAList={this.deleteAList}
                />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
            </>
        );
    }
}
export default ListTodo;
