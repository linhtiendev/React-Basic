import React from "react";

// class TestComponent kế thừa React.Component
class TestComponent extends React.Component {
    render() {
        return (
            <div>TestComponent</div>
        )
    }
}

// muốn sử dụng component ở file khác thì phải export
// export default -> trả ra duy nhất 1 class
// export {} -> trả ra nhiều class bên trong object
export default TestComponent;