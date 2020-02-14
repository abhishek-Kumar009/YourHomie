import {
    ADD_ORDER
} from '../actions/Orders';
import Order from '../../models/Order';
const initialState = {
    orders: []
};

const Orders = (state = initialState, action) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(new Date().toString(), payload.restrauntTitle, payload.restrauntImageUrl, payload.items, false, false, payload.totalAmount, new Date());
            const updatedOrders = [newOrder, ...state.orders];
            // console.log(updatedOrders);
            return {
                ...state,
                orders: updatedOrders
            }
            default:
                return state
    }
}
export default Orders;