const userReducerDafaultState = [];

export default (state = userReducerDafaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                action.user
            ]
        default:
            return state;
    }
};