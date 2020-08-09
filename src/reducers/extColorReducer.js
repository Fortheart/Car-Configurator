const initialState = {
    color: 'white',
    price: 0,
    officialName: 'Alpine White'
}


const extColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'WHITE_EXT_COLOR':
            return {
                color: action.color,
                price: action.payload,
                officialName: action.officialName

            }
        case 'BLUE_EXT_COLOR':
            return {
                color: action.color,
                price: action.payload,
                officialName: action.officialName
            };
        case 'BLACK_EXT_COLOR':
            return {
                color: action.color,
                price: action.payload,
                officialName: action.officialName
            };
        case 'ORANGE_EXT_COLOR':
            return {
                color: action.color,
                price: action.payload,
                officialName: action.officialName
            };
        default:
            return state;
    }
}

export default extColorReducer;

