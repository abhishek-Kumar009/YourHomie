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
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
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
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name='ios-restaurant'
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const BookMarkNavScreen = createStackNavigator(
  {
    bookMarkScreen: BookMarkScreen,
    restrauntsNav: RestrauntsContainer
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <MaterialIcons
          name='bookmark'
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);
const YourOrdersNavScreen = createStackNavigator(
  {
    yourOrdersScreen: YourOrdersScreen
    // restrauntsNav: RestrauntsContainer
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <MaterialCommunityIcons
          name='food'
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);
const FavOrdersNavScreen = createStackNavigator(
  {
    favOrdersScreen: FavoriteOrdersScreen
    // restrauntsNav: RestrauntsContainer
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <MaterialIcons
          name='favorite-border'
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
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
    loginSignUp: {
      screen: LoginSignUpScreen,
      navigationOptions: {
        drawerLabel: 'Login or Sign Up'
      }
    },
    restrauntsNavScreens: {
      screen: RestrauntsContainer,
      navigationOptions: {
        drawerLabel: 'Restraunts'
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
    // edgeWidth: 30,
    // hideStatusBar: true,
    // statusBarAnimation: 'fade',
    // overlayColor: Colors.overlayColor,

    initialRouteName: 'restrauntsNavScreens',
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-light',
        fontSize: 18,
        fontWeight: 'normal'
      }
    },
    drawerStyle: {
      backgroundColor: 'red'
    }
  }
);

export default createAppContainer(MenuDrawerContainer);
