import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoriteOrdersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Show all the favorite orders here!</Text>
    </View>
  );
};

FavoriteOrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Favorite Orders',
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

export default FavoriteOrdersScreen;
