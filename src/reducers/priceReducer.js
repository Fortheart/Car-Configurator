const initState = {
    price: 42270,
    updatedPrice: 0,
    newPrice: 0
}

const priceReducer = (state = initState, action) => {

    const { price, updatedPrice, newPrice } = state
    switch (action.type) {
        case 'BASE_PRICE':
            // return state = action.payload;
            return {
                price: action.payload,
                updatedPrice: 0,
                newPrice: 0
            }

        case 'UPDATE_PRICE':

            /*  for (var i = 0; i < history.length; i++) {
                  console.log(history[i]);
                  history.push(state);
              }*/
            //return state = state + action.payload
            return {
                price: price - newPrice + action.payload,
                updatedPrice: action.payload,
                newPrice: 0
            }



        case 'NEW_PRICE':
            //console.log(history[1]);
            //return state = state - action.payload;
            return {

                price: price - updatedPrice + action.payload,
                newPrice: action.payload,
                updatedPrice: 0
                //price: price - updatedPrice + action.payload
            }





        default:
            return state;
    }
}

export default priceReducer;