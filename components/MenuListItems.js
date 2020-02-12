import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';
import AddButton from '../components/AddButton';

const MenuListItems = props => {
  return (
    <View style={{ ...props.style, ...styles.dishContainer }}>
      <View style={styles.dishDetails}>
        <Text style={styles.dishTitle}>{props.title}</Text>
        <Text style={styles.dishRatings}>Ratings: {props.ratings} </Text>
        <Text style={styles.dishPrice}>₹{props.price}</Text>
        <Text style={styles.dishDesc}>{props.description}</Text>
      </View>

      <AddButton
        qty={props.qty}
        onSelectPositive={props.onSelectPositive}
        onSelectNegative={props.onSelectNegative}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dishContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 15,
    marginVertical: 7
  },
  dishDetails: {
    width: '70%',
    height: 100
  },
  dishTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    marginBottom: 5
  },
  dishRatings: {
    fontFamily: 'open-sans-light',
    fontSize: 10,
    marginBottom: 2.5
  },
  dishPrice: {
    fontFamily: 'open-sans-bold',
    fontSize: 12,
    marginBottom: 2.5
  },
  dishDesc: {
    fontFamily: 'open-sans-light',
    fontSize: 10
  }
});

export default MenuListItems;
