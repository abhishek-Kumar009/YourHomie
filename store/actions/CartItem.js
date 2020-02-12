export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART_ACTION = 'CLEAR_CART_ACTION';
export const addItemAction = (dish, currentRestrauntId) => {
    return {
        type: ADD_TO_CART,
        payload: {
            dish: dish,
            currentRestrauntId: currentRestrauntId
        }

    }
}

export const removeItemAction = (dish) => {
    return {
        type: REMOVE_FROM_CART,
        dish: dish
    }
}

export const clearCartAction = () => {
    return {
        type: CLEAR_CART_ACTION
    }
}