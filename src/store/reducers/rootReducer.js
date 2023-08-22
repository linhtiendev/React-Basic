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
    posts: [],
};
// khi khởi tạo thì biến state đã có giá trị là initState
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            let users = state.users;
            users = users.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                users,
            };
        case "CREATE_USER":
            let id = Math.floor(Math.random() * 10000);
            let user = { id: id, name: `Random - ${id}` };
            return {
                ...state,
                users: [...state.users, user],
            };
        default:
            return state;
    }
};
export default rootReducer;
