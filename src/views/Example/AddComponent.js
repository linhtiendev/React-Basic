import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    };

    // lưu state đã được thay đổi
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault(); // hàm không tải lại website
        // điều kiện nếu không truyền vào input
        if (!this.state.title || !this.state.salary) {
            alert("missing requied params");
            return;
        }
        console.log("check data input", this.state);
        // gọi ngược lại cha (đến function addNewJob)
        // truyền props lên cha một biến object gồm 3 phần tử
        this.props.addNewJob({
            id: Math.floor(Math.random() * 20000), // floor: hàm làm tròn
            title: this.state.title,
            salary: this.state.salary,
        });

        // khi gọi cha thêm thành công thì set input lại thành rỗng
        this.setState({
            title: "",
            salary: "",
        });
    };

    render() {
        return (
            <form>
                <label htmlFor="fname">Title Job: </label>
                <br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                />
                <br />
                <label htmlFor="lname">Salary: </label>
                <br />
                <input
                    type="text"
                    value={this.state.salary} // muốn giá trị cập nhật realtime
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br />
                <br />
                <input
                    type="submit"
                    value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        );
    }
}
export default AddComponent;
