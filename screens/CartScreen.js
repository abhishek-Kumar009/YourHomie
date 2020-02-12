import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import AddButton from '../components/AddButton';
import { addItemAction, removeItemAction } from '../store/actions/CartItem';
import Colors from '../constants/Colors';

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

  let dishesWthIds = {};
  const allCartItems = useSelector(state => state.cartItemReducer.item);
  cartItems.map(
    item =>
      (dishesWthIds[item.id] = allCartItems[item.id]
        ? allCartItems[item.id].qty
        : 0)
  );

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
                  dispatch(addItemAction(item));
                }}
                onSelectNegative={() => {
                  dispatch(removeItemAction(item));
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
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
