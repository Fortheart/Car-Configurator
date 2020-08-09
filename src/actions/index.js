//STEPS
export const stepCounterActionIncrement = () => {
    return {
        type: 'INCREMENT'
    }
}

export const stepCounterActionDecrement = () => {
    return {
        type: 'DECREMENT'
    }
}

//EXTERIOR COLOR
export const exteriorColorActionWhite = (price) => {
    return {
        type: 'WHITE_EXT_COLOR',
        color: 'white',
        payload: price
    }
}
export const exteriorColorActionBlue = (price) => {
    return {
        type: 'BLUE_EXT_COLOR',
        color: 'blue',
        payload: price
    }
}
export const exteriorColorActionBlack = (price) => {
    return {
        type: 'BLACK_EXT_COLOR',
        color: 'black',
        payload: price
    }
}
export const exteriorColorActionOrange = (price) => {
    return {
        type: 'ORANGE_EXT_COLOR',
        color: 'orange',
        payload: price
    }
}

//WHEELS

export const wheelsActionStandard = () => {
    return {
        type: 'STANDARD_WHEELS',
        payload: 0
    }
}

export const wheelsActionPremium = () => {
    return {
        type: 'PREMIUM_WHEELS',
        payload: 950
    }
}

export const showInteriorTrue = () => {
    return {
        type: 'SHOW_INTERIOR_TRUE'
    }
}

export const showInteriorFalse = () => {
    return {
        type: 'SHOW_INTERIOR_FALSE'
    }
}

export const interiorColorBlackAction = () => {
    return {
        type: 'BLACK_INTERIOR'
    }
}
export const interiorColorLightAction = () => {
    return {
        type: 'LIGHT_INTERIOR'
    }
}

export const interiorColorTrimBlackAction = () => {
    return {
        type: 'BLACK_TRIM'
    }
}
export const interiorColorTrimSilverAction = () => {
    return {
        type: 'SILVER_TRIM'
    }
}

//CAR IDs

export const carIdOneAction = () => {
    return {
        type: 'ID_ONE'
    }
}
export const carIdTwoAction = () => {
    return {
        type: 'ID_TWO'
    }
}
export const carIdThreeAction = () => {
    return {
        type: 'ID_THREE'
    }
}
export const carIdFourAction = () => {
    return {
        type: 'ID_FOUR'
    }
}
export const carIdFiveAction = () => {
    return {
        type: 'ID_FIVE'
    }
}
export const carIdSixAction = () => {
    return {
        type: 'ID_SIX'
    }
}
export const carIdSevenAction = () => {
    return {
        type: 'ID_SEVEN'
    }
}
export const carIdEightAction = () => {
    return {
        type: 'ID_EIGHT'
    }
}
export const carIdNineAction = () => {
    return {
        type: 'ID_NINE'
    }
}
export const modelIdOneAction = () => {
    return {
        type: 'ID_MODEL_ONE'
    }
}
export const modelIdTwoAction = () => {
    return {
        type: 'ID_MODEL_TWO'
    }
}
export const modelIdThreeAction = () => {
    return {
        type: 'ID_MODEL_THREE'
    }
}
export const modelIdFourAction = () => {
    return {
        type: 'ID_MODEL_FOUR'
    }
}
export const basePriceAction = (basePrice) => {
    return {
        type: 'ENGINE_PRICE',
        payload: basePrice
    }
}
export const updatePriceAction = (updatePrice) => {
    return {
        type: 'UPDATE_PRICE',
        payload: updatePrice
    }
}
export const newPriceAction = (newPrice) => {
    return {
        type: 'NEW_PRICE',
        payload: newPrice
    }
}


