// tham số state là trạng thái ứng dụng redux
// -> nơi lưu trữ data redux
// tham số action -> từ phía react truyền action lên như nào
// thì rootReducer return state như nấy

// dùng khi muốn nó lưu trữ dl gì
const initState = {
    users: [
        { id: 1, name: "LiTi" },
        { id: 2, name: "MiNi" },
    ],
};
// khi khởi tạo thì biến state đã có giá trị là initState
const rootReducer = (state = initState, action) => {
    return state;
};
export default rootReducer;
