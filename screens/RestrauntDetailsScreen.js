import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { RestrauntData, DishData } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MenuListItems from '../components/MenuListItems';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemAction,
  addItemAction,
  clearCartAction
} from '../store/actions/CartItem';

const RestrauntDetailsScreen = props => {
  const restrauntId = props.navigation.getParam('restrauntId');
  const currentRestraunt = RestrauntData.find(
    restraunt => restraunt.id === restrauntId
  );
  const dishes = DishData.filter(dish => dish.restrauntId === restrauntId);
  const currentDishes = dishes.filter(dish => dish.currentDish);
  let dishesWthIds = {};

  const cartItems = useSelector(state => state.cartItemReducer.item);
  currentDishes.map(
    dish =>
      (dishesWthIds[dish.id] = cartItems[dish.id] ? cartItems[dish.id].qty : 0)
  );

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={{ uri: currentRestraunt.imageUrl }}
        />
      </View>
      <ScrollView style={{ width: '100%', backgroundColor: Colors.backColor }}>
        <View style={styles.restDetContainer}>
          <View style={styles.restContent}>
            <Text style={styles.restTitle}>{currentRestraunt.title}</Text>
            <Text numberOfLines={2} style={styles.category}>
              {currentRestraunt.category.map((cat, index) => {
                if (index === currentRestraunt.category.length - 1) {
                  return cat;
                }
                return cat + ', ';
              })}
            </Text>
          </View>
          <View style={styles.ratingsContainer}>
            <Text style={styles.rating}>{currentRestraunt.ratings}</Text>
          </View>
        </View>
        <View style={styles.currentDishContainer}>
          <Text style={styles.currentDishText}>Currently preparing</Text>
        </View>
        <View style={styles.currentDishContent}>
          {currentDishes.map(dish => {
            return (
              <MenuListItems
                key={dish.id}
                title={dish.title}
                ratings={dish.ratings}
                price={dish.price}
                description={dish.description}
                style={{}}
                qty={dishesWthIds[dish.id]}
                onSelectPositive={() => {
                  dispatch(addItemAction(dish, currentRestraunt.id));
                }}
                onSelectNegative={() => {
                  dispatch(removeItemAction(dish));
                }}
              />
            );
          })}
        </View>
        <View style={styles.menuTextContainer}>
          <Text style={styles.menuText}>MENU</Text>
        </View>
        {dishes.map(dish => (
          <MenuListItems
            key={dish.id}
            title={dish.title}
            ratings={dish.ratings}
            price={dish.price}
            description={dish.description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

RestrauntDetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'YourHomie!',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='cart icon'
          iconName='shopping-cart'
          onPress={() => {
            navData.navigation.navigate({
              routeName: 'cartScreen'
            });
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  imgContainer: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  restDetContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 13
  },
  restContent: {
    width: '80%',
    height: '100%'
  },
  restTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    marginVertical: 6
  },
  category: {
    fontFamily: 'open-sans-light',
    fontSize: 14
  },
  currentDishContainer: {
    marginVertical: 5,
    padding: 15
  },
  currentDishText: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: Colors.ratingsColor
  },
  currentDishContent: {
    borderColor: Colors.ratingsColor,
    borderWidth: 1
  },
  menuTextContainer: {
    marginVertical: 5,
    padding: 15
  },
  menuText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  ratingsContainer: {
    width: 35,
    height: 25,
    borderRadius: 5,
    padding: 5,
    backgroundColor: Colors.ratingsColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rating: {
    fontFamily: 'open-sans-regular',
    fontSize: 11,
    color: 'white'
  }
});

export default RestrauntDetailsScreen;
