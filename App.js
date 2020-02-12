import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import RestrauntsContainer from './navigation/RestrauntsNavigator';
import { combineReducers, createStore } from 'redux';
import CartItemReducer from './store/reducers/CartItem';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

enableScreens();

const rootReducer = combineReducers({
  cartItemReducer: CartItemReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Fonts.loadAsync({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf')
  });
};

export default function App() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  if (!isFontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsFontsLoaded(true)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <RestrauntsContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
