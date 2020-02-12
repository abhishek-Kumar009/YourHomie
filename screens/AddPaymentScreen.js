import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AddPaymentScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Select payment options from here!</Text>
      <Button
        title='Go to restraunts screen'
        onPress={() => {
          props.navigation.navigate('restrauntScreen');
        }}
      />
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

export default AddPaymentScreen;
