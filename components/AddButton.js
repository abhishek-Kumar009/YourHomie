import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

const AddButton = props => {
  const isAvailable = props.qty >= 1 ? true : false;
  if (isAvailable) {
    return (
      <View style={{ ...props.style, ...styles.btnToggleContainer }}>
        <TouchableNativeFeedback onPress={props.onSelectNegative}>
          <View style={styles.btnNegative}>
            <Text style={styles.plus}>-</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.qtyContainer}>
          <Text style={styles.qty}>{props.qty}</Text>
        </View>
        <TouchableNativeFeedback onPress={props.onSelectPositive}>
          <View style={styles.btnPositive}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  } else {
    return (
      <View style={{ ...props.style, ...styles.btnContainer }}>
        <View style={styles.addTextContainer}>
          <Text style={styles.add}>ADD</Text>
        </View>
        <TouchableNativeFeedback onPress={props.onSelectPositive}>
          <View style={styles.plusContainer}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 90,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.4,
    borderRadius: 5,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  btnToggleContainer: {
    width: 90,
    height: 30,
    flexDirection: 'row',
    borderWidth: 0.4,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1
  },
  btnNegative: {
    width: '30%',
    height: 30,
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnPositive: {
    width: '30%',
    height: 30,
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  qtyContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.activeColor
  },
  addTextContainer: {
    marginHorizontal: 6
  },
  add: {
    fontFamily: 'open-sans-regular',
    fontSize: 13
  },
  plusContainer: {
    width: 30,
    height: 40,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  plus: {
    fontFamily: 'open-sans-regular',
    fontSize: 13,
    color: '#ff8080'
  }
});

export default AddButton;
