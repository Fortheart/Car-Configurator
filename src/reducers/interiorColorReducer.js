const initialState = {
    id: 0,
    name: 'Black With Contrast Leather Stitching Vernasca Leather',
    price: 0
}

const interiorColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LIGHT_INTERIOR':
            return {
                id: action.id,
                name: action.name,
                price: action.price,

            }
        case 'BLACK_INTERIOR':
            return {
                id: action.id,
                name: action.name,
                price: action.price,

            }
        default:
            return state;
    }
}

export default interiorColorReducer;
