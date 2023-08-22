import React from "react";
import { withRouter } from "react-router-dom";
import banner from "../../assets/images/bg-test-02.jpg";
import { Connect } from "react-redux";

class Home extends React.Component {
    //Redirect page
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push("/todo");
        // }, 4000);
    }

    render() {
        return (
            <>
                <div>Component Home</div>
                <div>
                    <img src={banner} />
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
// Dùng hàm Connect giúp dứng dụng react và redux liên kết với nhau
// và chỉ liên kết trong component được gọi
export default Connect(mapStateToProps)(withRouter(Home));
