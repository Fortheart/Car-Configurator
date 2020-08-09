const showInteriorReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_INTERIOR_TRUE':
            return state = true;
        case 'SHOW_INTERIOR_FALSE':
            return state = false;
        default:
            return state = false;
    }
}

export default showInteriorReducer;
