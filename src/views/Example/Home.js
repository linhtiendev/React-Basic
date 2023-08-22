import React from "react";
import { withRouter } from "react-router-dom";
import banner from "../../assets/images/bg-test-02.jpg";

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
export default withRouter(Home);
