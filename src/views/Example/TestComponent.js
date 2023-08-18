import React from "react";

// class TestComponent kế thừa React.Component
class TestComponent extends React.Component {
    state = {
        name: 'Liti ne',
        age: '22'
    };
    // -> có 2 cách in ra state
    /*
    JSX => return block <=> trả về 1 phần tử html
    -> dùng {} khi muốn dùng js bên trong html
    -> nếu không muốn bọc 1 div ở ngoài thì dùng fragment <=> <></>
    // this chính là bản thân class, dùng dấu . để tham chiếu đến 1 method
    */

    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        // let name = 'Liti'
        return (
            <>
                <div>
                    {/* nhập dữ liệu realtime */}
                    <input value={this.state.name} type="text" 
                        onChange={(event) => this.handleOnchangeName(event)}
                    /> <br/>
                    Hello world, my name is { this.state.name }
                </div>
                <div>
                    Im {this.state['age']} years old
                </div>
            </>
        )
    }
}

// muốn sử dụng component ở file khác thì phải export
// export default -> trả ra duy nhất 1 class
// export {} -> trả ra nhiều class bên trong object
export default TestComponent;