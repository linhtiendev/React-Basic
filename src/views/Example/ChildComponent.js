import React from "react";


class ChildComponent extends React.Component {
    // tạo state chứa phần tử showjobs là false
    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({
            // showJobs bằng false -> dùng dấu ! là phủ định lại
            // => showJobs bằng true
            showJobs: !this.state.showJobs,
        })
    }

    render() {
        let { arrJobs } = this.props;

        // lấy state
        let {showJobs} = this.state;
        // Dùng điều kiện so sánh giá trị biến showJobs
        // điều kiện đúng -> lấy phần tử đầu tiên
        let check = showJobs === true ? 'showJobs true' : 'showJobs false';
        console.log("check: ", check);
        return (
            <>
                {/* state showJobs bằng true thì ẩn nút show */}
                {/* state showJobs bằng false thì hiện nút show */}

                {/* đk showJobs = false thì in ra */}
                { showJobs === false ? 
                    <div>
                        <button onClick={()=> this.handleShowHide()}>Show</button>
                    </div>
                // showJobs bằng true thì in ra
                :
                    <>
                    <div className="array-job-list">
                        {
                            arrJobs.map((item , index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        {/* showJobs bằng true thì hiện */}
                        <button
                            onClick={()=> this.handleShowHide()}
                        >
                            Hide
                        </button>
                    </div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponent;