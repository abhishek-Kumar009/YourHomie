import CartItem from '../../models/CartItem';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART_ACTION
} from '../actions/CartItem';
const initialState = {
  item: {},
  totalAmount: 0,
  restrauntId: ''
};

const CartItemReducer = (state = initialState, action) => {
  const {
    payload
  } = action;
  switch (action.type) {
    case ADD_TO_CART:
      if (state.restrauntId === payload.currentRestrauntId) {
        //Same item from same restraunt
        const addedDish = payload.dish;
        const dishTitle = addedDish.title;
        const dishPrice = addedDish.price;

        let updatedItemOrNewItem;

        if (state.item[addedDish.id]) {
          const selectedItem = state.item[addedDish.id];
          updatedItemOrNewItem = new CartItem(
            selectedItem.qty + 1,
            dishTitle,
            dishPrice,
            selectedItem.sum + dishPrice
          );
        } else {
          updatedItemOrNewItem = new CartItem(
            1,
            dishTitle,
            dishPrice,
            dishPrice
          );
        }
        return {
          ...state,
          item: {
            ...state.item,
            [addedDish.id]: updatedItemOrNewItem
          },
          totalAmount: state.totalAmount + dishPrice
        };
      } else {
        //New item from another restraunt
        state.item = {};
        state.totalAmount = 0;
        state.restrauntId = payload.currentRestrauntId;
        const addedDish = payload.dish;
        const dishTitle = addedDish.title;
        const dishPrice = addedDish.price;

        let updatedItemOrNewItem;

        if (state.item[addedDish.id]) {
          const selectedItem = state.item[addedDish.id];
          updatedItemOrNewItem = new CartItem(
            selectedItem.qty + 1,
            dishTitle,
            dishPrice,
            selectedItem.sum + dishPrice
          );
        } else {
          updatedItemOrNewItem = new CartItem(
            1,
            dishTitle,
            dishPrice,
            dishPrice
          );
        }
        return {
          ...state,
          item: {
            ...state.item,
            [addedDish.id]: updatedItemOrNewItem
          },
          totalAmount: state.totalAmount + dishPrice
        };
      }

      case REMOVE_FROM_CART:
        const currentDish = action.dish;
        const selectedItem = state.item[currentDish.id];
        if (selectedItem) {
          const currentQty = selectedItem.qty;
          if (currentQty === 1) {
            const amount = state.totalAmount - selectedItem.price;
            const updatedItems = {
              ...state.item
            };
            delete updatedItems[currentDish.id];
            return {
              ...state,
              item: updatedItems,
              totalAmount: amount
            };
          } else {
            const updatedDish = new CartItem(
              selectedItem.qty - 1,
              selectedItem.title,
              selectedItem.price,
              selectedItem.sum - selectedItem.price
            );
            return {
              ...state,
              item: {
                ...state.item,
                [currentDish.id]: updatedDish
              },
              totalAmount: state.totalAmount - currentDish.price
            };
          }
        } else {
          return state;
        }
        case CLEAR_CART_ACTION:
          return {
            ...state,
            item: {},
              totalAmount: 0,
              restrauntId: ''

          };
        default:
          return state;
  }
};

export default CartItemReducer;