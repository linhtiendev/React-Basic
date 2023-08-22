import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class UserDetail extends React.Component {
    state = { user: {} };
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {},
            });
        }
    }

    // Hàm trở lại trang user
    handleButtonBack = () => {
        this.props.history.push("/user");
    };

    render() {
        let { user } = this.state;
        // check biến có rỗng hay kh
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div>this is user detail id: {this.props.match.params.id}</div>
                {/* Check dk object rỗng */}
                {isEmptyObj === false && (
                    <>
                        <div>
                            User's name: {user.first_name} {user.last_name}
                        </div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => this.handleButtonBack()}
                            >
                                Back
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}
export default withRouter(UserDetail);
