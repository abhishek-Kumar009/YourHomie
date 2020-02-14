import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

const PaymentButton = props => {
  return (
    <TouchableNativeFeedback
      onPress={props.onSelect}
      style={{ ...props.style, width: '100%' }}
    >
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>Place Your Order</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.paymentBtnColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontFamily: 'open-sans-light',
    fontSize: 20,
    color: 'white'
  }
});

export default PaymentButton;
