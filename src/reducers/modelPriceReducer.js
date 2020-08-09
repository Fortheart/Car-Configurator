const initialState = {
    price: 0,
    name: 'SE'
}

const priceReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'MODEL_PRICE':
            return {
                name: action.name,
                price: action.payload
            }

        default:
            return state;
    }

}

export default priceReducer;