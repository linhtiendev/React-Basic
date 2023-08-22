import React from "react";
import { withRouter } from "react-router-dom";
import banner from "../../assets/images/bg-test-02.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
    //Redirect page
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push("/todo");
        // }, 4000);
    }

    handleDeleteUser = (user) => {
        console.log("check delete", user);
        this.props.deleteUserRedux(user);
    };

    handleCreateUser = () => {
        this.props.addUserRedux();
    };

    render() {
        // console.log(this.props.dataRedux);
        // Tạo biến hứng state redux
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>Component Home</div>
                <div>
                    <img src={banner} />
                </div>
                <div>
                    {/* đk in state redux */}
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1}. {item.name} &nbsp;
                                    <button
                                        type="button"
                                        onClick={() =>
                                            this.handleDeleteUser(item)
                                        }
                                    >
                                        x
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => this.handleCreateUser()}
                                    >
                                        Add new
                                    </button>
                                </div>
                            );
                        })}
                </div>
            </>
        );
    }
}

// đây là state của redux
// gọi state của redux
const mapStateToProps = (state) => {
    return { dataRedux: state.users };
};

// 1 action cuar redux là 1 object gồm có
// type: định nghĩa tên của action
// payload: dữ liệu muốn mang theo action đấy
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) =>
            dispatch({ type: "DELETE_USER", payload: userDelete }),
        addUserRedux: () => dispatch({ type: "CREATE_USER" }),
    };
};

// Dùng hàm Connect giúp dứng dụng react và redux liên kết với nhau
// và chỉ liên kết trong component được gọi
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
