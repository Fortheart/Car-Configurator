
const carModelReducer = (state = 1, action) => {
    switch (action.type) {
        case 'ID_MODEL_ONE':
            return state = 1;
        case 'ID_MODEL_TWO':
            return state = 2;
        case 'ID_MODEL_THREE':
            return state = 3;
        case 'ID_MODEL_FOUR':
            return state = 4;
        default:
            return state;
    }
}

export default carModelReducer;
