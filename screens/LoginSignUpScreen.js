import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginSignUpScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Login/SignUp screen here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoginSignUpScreen;
