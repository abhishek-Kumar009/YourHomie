import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import AddButton from '../components/AddButton';
import {
  addItemAction,
  removeItemAction,
  clearCartAction
} from '../store/actions/CartItem';
import { RestrauntData } from '../data/dummy-data';
import Colors from '../constants/Colors';
import PaymentButton from '../components/PaymentButton';
const CartScreen = props => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.cartItemReducer.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCart = [];
    for (const key in state.cartItemReducer.item) {
      transformedCart.push({
        id: key,
        price: state.cartItemReducer.item[key].price,
        qty: state.cartItemReducer.item[key].qty,
        title: state.cartItemReducer.item[key].title,
        sum: state.cartItemReducer.item[key].sum
      });
    }

    return transformedCart.sort((a, b) => (a.price > b.price ? -1 : 1));
  });

  const restrauntId = useSelector(state => state.cartItemReducer.restrauntId);

  let dishesWthIds = {};
  const allCartItems = useSelector(state => state.cartItemReducer.item);
  cartItems.map(
    item =>
      (dishesWthIds[item.id] = allCartItems[item.id]
        ? allCartItems[item.id].qty
        : 0)
  );
  if (cartItems.length > 0) {
    return (
      <View style={styles.screen}>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>Grand Total</Text>
          <Text style={styles.totalPrice}>₹{totalAmount}</Text>
        </View>

        <ScrollView style={{ width: '100%' }}>
          {cartItems.map(item => {
            return (
              <View key={item.id} style={styles.cartItemContainer}>
                <View style={styles.itemDetailsContainer}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemPrice}>₹{item.price}</Text>
                </View>
                <AddButton
                  qty={dishesWthIds[item.id]}
                  style={{ marginLeft: 17 }}
                  onSelectPositive={() => {
                    dispatch(addItemAction(item, restrauntId));
                  }}
                  onSelectNegative={() => {
                    dispatch(removeItemAction(item));
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
        <PaymentButton
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'yourOrders',
              params: {
                dishDetails: dishesWthIds,
                totalPrice: totalAmount
              }
            });

            dispatch(clearCartAction());
          }}
          style={{ justifyContent: 'flex-end' }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.noItemsCartContainer}>
        <Text style={styles.noItemText}>Your cart is empty!</Text>
      </View>
    );
  }
};

CartScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Cart!',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='cart icon'
          iconName='shopping-cart'
          onPress={() => {
            navData.navigation.navigate({ routeName: 'cartScreen' });
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.backColor
  },
  noItemsCartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: Colors.backColor
  },
  noItemText: {
    fontFamily: 'open-sans-regular',
    fontSize: 14
  },
  cartItemContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100
  },
  itemDetailsContainer: {
    width: '70%',
    height: '100%'
  },
  itemTitle: {
    fontFamily: 'open-sans-regular',
    fontSize: 15
  },
  itemPrice: {
    fontFamily: 'open-sans-bold',
    fontSize: 12
  },
  totalContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 40
  },
  total: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  totalPrice: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  }
});

export default CartScreen;
