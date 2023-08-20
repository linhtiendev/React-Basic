import React from "react";
import "./listInputTodo.scss";

class ListInputTodo extends React.Component {
    state = {
        showList: false,
    };

    handleShowHideList = () => {
        this.setState({
            showList: !this.state.showList,
        });
    };

    handleOnclickButtonDelete = (list) => {
        this.props.deleteAList(list);
    };

    render() {
        let { arrList } = this.props;
        let { showList } = this.state;
        return (
            <>
                {showList === false ? (
                    <div>
                        <button
                            className="btn-showHide"
                            onClick={() => this.handleShowHideList()}
                        >
                            Show
                        </button>
                    </div>
                ) : (
                    // showList bằng true thì in ra
                    <>
                        <div className="array-list-user">
                            {arrList.map((item, index) => {
                                return (
                                    // thêm thuộc tính key để tối ưu hóa hiệu năng
                                    <div
                                        className="list-container"
                                        key={item.id}
                                    >
                                        {index + 1}. {item.name} - {item.class}{" "}
                                        <></>
                                        <button className="btn-list-update">
                                            Update
                                        </button>
                                        <button
                                            className="btn-list-delete"
                                            onClick={() =>
                                                this.handleOnclickButtonDelete(
                                                    item
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <button
                                className="btn-showHide"
                                onClick={() => this.handleShowHideList()}
                            >
                                Hide
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default ListInputTodo;
