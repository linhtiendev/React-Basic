import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class TestComponent extends React.Component {
    // khởi tạo state rỗng
    state = {
        arrJobs: [
            { id: "job1", title: "Dev", salary: "500" },
            { id: "job2", title: "Tester", salary: "400" },
            { id: "job3", title: "BA", salary: "300" },
        ],
    };

    // Hàm cập nhật job
    // biến job là input đầu vào của hàm
    // truyền vào cái gì in cái đó ra, truyền job in job
    addNewJob = (job) => {
        console.log("check props from parent:", job);

        // nhận props của con rồi set lại state
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
    };

    render() {
        return (
            <>
                {/* truyền function addNewJob xuống để cập nhật*/}
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    // truyền state mảng arrJobs
                />
            </>
        );
    }
}
export default TestComponent;
