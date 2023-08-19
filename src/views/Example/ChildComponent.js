import React from "react";


class ChildComponent extends React.Component {

    // khởi tạo state rỗng
    state = {
        firstName: "",
        lastName: ""
    }

    // lưu state đã được thay đổi
    handleChangeFirstName = (event) => {
        this.setState({ 
            firstName: event.target.value 
        });
    }
    handleChangeLastName = (event) => {
        this.setState({ 
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(); // hàm không tải lại website
        console.log("check data input", this.state);

    }
    /*
    -> tạo 1 form để lưu fname lname trong input 
    -> mỗi lần onChange đẫ lưu lại
    -> khi click submit thì nó lấy data đó truyền lên API
    */
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        // cách 2

        let {name, age, arrJobs} = this.props;
        // nhận props từ cha

        // this.props là 1 object
        // cách rút gọn

        console.log(this.props);
        return (
            <>
                {/* nhận props từ component cha */}
                {/* <div>Child Component: {this.props.name} - {this.props.age}</div> */}
                {/* cách 1 */}
                <div>Child Component: {name} - {age}</div>

                {/* xử lý props cha truyền xuống */}
                <div className="array-job-list">
                    {
                        arrJobs.map((item , index) => {
                            return (
                                // dùng map để tạo ra arr mới
                                // mỗi 1 đưa con nên có 1 key props
                                // item đại diện cho từng phần tử trong object
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
export default ChildComponent;