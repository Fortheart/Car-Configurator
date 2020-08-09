
const carIdReducer = (state = 1, action) => {
    switch (action.type) {
        case 'ID_ONE':
            return state = 1;
        case 'ID_TWO':
            return state = 2;
        case 'ID_THREE':
            return state = 3;
        case 'ID_FOUR':
            return state = 4;
        case 'ID_FIVE':
            return state = 5;
        case 'ID_SIX':
            return state = 6;
        case 'ID_SEVEN':
            return state = 7;
        case 'ID_EIGHT':
            return state = 8;
        case 'ID_NINE':
            return state = 9;
        default:
            return state;
    }
}

export default carIdReducer;

