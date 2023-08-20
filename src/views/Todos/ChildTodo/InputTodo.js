import React from "react";
import "./inputTodo.scss";
import { toast } from "react-toastify";

class InputTodo extends React.Component {
    state = {
        name: "",
        class: "",
    };

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    handleChangeClass = (event) => {
        this.setState({
            class: event.target.value,
        });
    };

    handleButtonSubmit = (event) => {
        event.preventDefault(); // hàm không tải lại website
        // điều kiện nếu không truyền vào input
        if (!this.state.name || !this.state.class) {
            toast.error("Missing requied params");
            return;
        }
        this.props.addNewUser({
            id: Math.floor(Math.random() * 20000), // floor: hàm làm tròn
            name: this.state.name,
            class: this.state.class,
        });
        // khi gọi cha thêm thành công thì set input lại thành rỗng
        this.setState({
            name: "",
            class: "",
        });
    };

    render() {
        return (
            <>
                <form>
                    <label>Name</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleChangeName(event)}
                    />
                    <br />
                    <label>Class</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.class}
                        onChange={(event) => this.handleChangeClass(event)}
                    />
                    <br />
                    <button
                        className="add-button"
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleButtonSubmit(event)}
                    >
                        Add
                    </button>
                    <br />
                </form>
            </>
        );
    }
}

export default InputTodo;
