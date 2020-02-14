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

const GridListView = props => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <TouchableComponent activeOpacity={0.6} onPress={props.onSelect}>
      <View style={styles.gridItem}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.itemContent}>
          <View style={styles.content}>
            <Text numberOfLines={2} style={styles.itemTitle}>
              {props.title}
            </Text>
            <Text numberOfLines={2} style={styles.category}>
              {props.category.map((cat, index) => {
                if (index === props.category.length - 1) {
                  return cat;
                }
                return cat + ', ';
              })}
            </Text>
          </View>
          <View style={styles.ratingsContentContainer}>
            <View style={styles.ratingsContainer}>
              <Text style={styles.rating}>{props.ratings}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    height: 80,
    flexDirection: 'row',
    marginVertical: 10
    // borderBottomColor: Colors.backColor,
    // borderBottomWidth: 1
  },
  imgContainer: {
    width: 70,
    height: 70,
    overflow: 'hidden',
    borderRadius: 5,
    marginRight: 12
  },
  image: {
    width: '100%',
    height: '100%'
  },
  itemContent: {
    flexDirection: 'row',
    width: '80%',
    height: '100%'
  },
  content: {
    width: '70%',
    height: '100%',
    overflow: 'hidden',
    marginRight: 4
  },
  itemTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 15
  },
  category: {
    fontFamily: 'open-sans-light',
    fontSize: 12,
    marginVertical: 4
  },
  ratingsContentContainer: {
    width: '30%',
    height: '100%',

    alignItems: 'flex-end'
  },
  ratingsContainer: {
    width: 35,
    height: 25,
    borderRadius: 5,
    padding: 5,
    backgroundColor: Colors.ratingsColor,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 14
    // borderWidth: 1
  },
  rating: {
    fontFamily: 'open-sans-regular',
    fontSize: 11,
    color: 'white'
  }
});

export default GridListView;
