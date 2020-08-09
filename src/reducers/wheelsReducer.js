const initialState = {
    name: 'standardWheels',
    price: 0,
    officialName: 'Standard Wheels'
}


const wheelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STANDARD_WHEELS':
            return {
                name: action.name,
                price: action.payload,
                officialName: action.officialName
            }
        case 'PREMIUM_WHEELS':
            return {
                name: 'premiumWheels',
                price: action.payload,
                officialName: action.officialName
            }
        default:
            return state;
    }
}

export default wheelsReducer;
