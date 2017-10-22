
const usersListTemp = {
    usersList: []
}

export default (state=usersListTemp, action) => {
    switch  (action.type){
        case "ADD_USER":
            state = {
                ...state,
                 usersList:[...state.usersList, action.UserDetail],
                // valueChange: [...state.valueChange, action.UserDetail]
            }
            break;
    }
    return state;
};