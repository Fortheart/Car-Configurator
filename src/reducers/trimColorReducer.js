const initialState = {
    id: 0,
    name: 'Aluminium Tetragon',
    price: 0
}

const trimColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SILVER_TRIM':
            return {
                id: action.id,
                name: action.name,
                price: action.price,

            }
        case 'BLACK_TRIM':
            return {
                id: action.id,
                name: action.name,
                price: action.price,

            }
        default:
            return state;
    }
}

export default trimColorReducer;
