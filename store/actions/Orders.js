export const ADD_ORDER = 'ADD_ORDER';

export const addOrderAction = (restrauntTitle, restrauntImageUrl, items, totalAmount) => {
    return {
        type: ADD_ORDER,
        payload: {
            restrauntTitle: restrauntTitle,
            restrauntImageUrl: restrauntImageUrl,
            items: items,
            totalAmount: totalAmount
        }
    }
}