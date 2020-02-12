import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { DishData } from '../data/dummy-data';

const YourOrdersScreen = props => {
  const orderItemDetails = props.navigation.getParam('dishDetails');
  const totalAmount = props.navigation.getParam('totalPrice');
  let allOrders;

  return <View style={styles.screen}></View>;
};

YourOrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Orders',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='cart icon'
          iconName='shopping-cart'
          onPress={() => {
            navData.navigation.navigate('cartScreen');
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='menu icon'
          iconName='menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
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
    alignItems: 'center'
  }
});

export default YourOrdersScreen;
