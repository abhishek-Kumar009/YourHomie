import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { DishData } from '../data/dummy-data';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';

const YourOrdersScreen = props => {
  const orders = useSelector(state => state.orderReducer.orders);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        style={{ width: '100%' }}
      >
        {orders.map(order => {
          let date = order.date.getHours();
          let minutes = order.date.getMinutes();
          if (minutes < 10) {
            minutes = '0' + minutes;
          }
          if (date > 12) {
            date = date - 12 + ' : ' + minutes + 'pm';
          } else {
            date = date + ' : ' + minutes + 'am';
          }
          let items = [];
          for (const key in order.items) {
            const title = DishData.find(dish => dish.id === key).title;
            const qty = order.items[key];
            items.push({
              id: key,
              title: title,
              qty: qty
            });
          }
          return (
            <View key={order.id} style={styles.cardContainer}>
              <View style={styles.headingContainer}>
                <View style={styles.imgContainer}>
                  <Image
                    source={{ uri: order.restrauntImageUrl }}
                    style={styles.image}
                  />
                </View>
                <View style={styles.restrauntTitleContainer}>
                  <Text style={styles.restrauntTitle}>
                    {order.restrauntTitle}
                  </Text>
                  <Text style={styles.location}>
                    Cannaught Place, New Delhi
                  </Text>
                </View>
              </View>
              <View style={styles.OrderDetailsContainer}>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemText}>ITEMS</Text>
                  {items.map(item => (
                    <Text key={item.id} style={styles.item}>
                      {item.qty} x {item.title}
                    </Text>
                  ))}
                </View>
                <View style={styles.orderDateContainer}>
                  <Text style={styles.orderedOnText}>ORDERED ON</Text>
                  <Text style={styles.date}>
                    {order.date.toDateString()} at {date}
                  </Text>
                </View>
                <View style={styles.totalAmountContainer}>
                  <Text style={styles.totalAmountText}>Total Amount</Text>
                  <Text style={styles.totalAmount}>₹{order.totalAmount}</Text>
                </View>
              </View>
              <View style={styles.footerContainer}>
                <View style={styles.orderStatusContainer}>
                  <Text style={styles.orderStatus}>Delivered</Text>
                </View>
                <View style={styles.repeatOrderContainer}>
                  <Text style={styles.repeatOrder}>Repeat Order</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

YourOrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Orders',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='cart icon'
          iconName='shopping-cart'
          onPress={() => {
            navData.navigation.navigate('cartScreen');
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='menu icon'
          iconName='menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backColor,
    padding: 15
  },
  cardContainer: {
    padding: 10,
    width: '100%',
    marginVertical: 10,
    borderRadius: 5,
    height: 260,
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 4
  },

  headingContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '24%'
    // borderWidth: 1
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 7,
    elevation: 3
  },
  image: {
    width: '100%',
    height: '100%'
  },
  restrauntTitleContainer: {
    width: '80%',
    height: '100%'
  },
  location: {
    fontFamily: 'open-sans-light',
    fontSize: 11,
    marginVertical: 4
  },
  restrauntTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  OrderDetailsContainer: {
    width: '100%',
    marginVertical: 8,
    borderBottomColor: Colors.backColor,
    borderTopColor: Colors.backColor,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginVertical: 8,
    paddingBottom: 5,
    paddingTop: 5
  },
  itemContainer: {},
  itemText: {
    fontFamily: 'open-sans-light',
    fontSize: 11
  },
  item: {
    fontFamily: 'open-sans-bold',
    fontSize: 11
  },
  orderDateContainer: {
    marginVertical: 4
  },
  orderedOnText: {
    fontFamily: 'open-sans-light',
    fontSize: 11
  },
  date: {
    fontFamily: 'open-sans-bold',
    fontSize: 11
  },
  totalAmountContainer: {},
  totalAmountText: {
    fontFamily: 'open-sans-light',
    fontSize: 11
  },
  totalAmount: {
    fontFamily: 'open-sans-bold',
    fontSize: 11
  },
  footerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'flex-end'
  },
  orderStatus: {
    fontFamily: 'open-sans-light',
    fontSize: 11
  },
  repeatOrderContainer: {},
  repeatOrder: {
    fontFamily: 'open-sans-light',
    fontSize: 11
  }
});

export default YourOrdersScreen;
