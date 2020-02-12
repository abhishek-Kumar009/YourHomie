import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import RestrauntsScreen from '../screens/RestrauntsScreen';
import RestrauntDetailsScreen from '../screens/RestrauntDetailsScreen';
import CartScreen from '../screens/CartScreen';
import AddPaymentScreen from '../screens/AddPaymentScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import LoginSignUpScreen from '../screens/LoginSignUpScreen';
import BookMarkScreen from '../screens/BookMarkScreen';
import YourOrdersScreen from '../screens/YourOrdersScreen';
import FavoriteOrdersScreen from '../screens/FavoriteOrdersScreen';
import AboutScreen from '../screens/AboutScreen';
import FeedBackScreen from '../screens/FeedBackScreen';
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const RestrauntsContainer = createStackNavigator(
  {
    restrauntScreen: RestrauntsScreen,
    restrauntDetailScreen: RestrauntDetailsScreen,
    cartScreen: CartScreen,
    paymentScreen: AddPaymentScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const BookMarkNavScreen = createStackNavigator(
  {
    bookMarkScreen: BookMarkScreen,
    restrauntsNav: RestrauntsContainer
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);
const YourOrdersNavScreen = createStackNavigator(
  {
    yourOrdersScreen: YourOrdersScreen
    // restrauntsNav: RestrauntsContainer
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);
const FavOrdersNavScreen = createStackNavigator(
  {
    favOrdersScreen: FavoriteOrdersScreen
    // restrauntsNav: RestrauntsContainer
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);
const AboutNavScreen = createStackNavigator(
  {
    aboutScreen: AboutScreen
    // restrauntsNav: RestrauntsContainer
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);
const FeedBackNavScreen = createStackNavigator(
  {
    feedBackScreen: FeedBackScreen
    // restrauntsNav: RestrauntsContainer
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const MenuDrawerContainer = createDrawerNavigator(
  {
    restrauntsNavScreens: {
      screen: RestrauntsContainer,
      navigationOptions: {
        drawerLabel: 'Restraunts'
      }
    },
    loginSignUp: {
      screen: LoginSignUpScreen,
      navigationOptions: {
        drawerLabel: 'Login or Sign Up'
      }
    },
    bookMark: {
      screen: BookMarkNavScreen,
      navigationOptions: {
        drawerLabel: 'Bookmarks'
      }
    },
    yourOrders: {
      screen: YourOrdersNavScreen,
      navigationOptions: {
        drawerLabel: 'Your Orders'
      }
    },
    favoriteOrders: {
      screen: FavOrdersNavScreen,
      navigationOptions: {
        drawerLabel: 'Favorite Orders'
      }
    },
    about: {
      screen: AboutNavScreen,
      navigationOptions: {
        drawerLabel: 'About'
      }
    },
    feedBack: {
      screen: FeedBackNavScreen,
      navigationOptions: {
        drawerLabel: 'Send Feedback'
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-regular',
        fontSize: 16
      }
    }
  }
);

export default createAppContainer(MenuDrawerContainer);
