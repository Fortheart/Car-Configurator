const initialState = {
    price: 42270,
    name: '320i'
}

const enginePriceReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ENGINE_PRICE':
            return {
                name: action.name,
                price: action.payload
            }

        default:
            return state;
    }

}

export default enginePriceReducer;