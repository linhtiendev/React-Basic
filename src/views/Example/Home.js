import React from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
    //Redirect page
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/todo");
        }, 4000);
    }

    render() {
        return <div>Home Component</div>;
    }
}
export default withRouter(Home);
