import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { RestrauntData } from '../data/dummy-data';
import Colors from '../constants/Colors';
import GridListView from '../components/GridListView';
const RestrauntsScreen = props => {
  const restrauntListView = ItemData => (
    <GridListView
      title={ItemData.item.title}
      imageUrl={ItemData.item.imageUrl}
      category={ItemData.item.category}
      ratings={ItemData.item.ratings}
      onSelect={() => {
        props.navigation.navigate({
          routeName: 'restrauntDetailScreen',
          params: {
            restrauntId: ItemData.item.id
          }
        });
      }}
    />
  );

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        style={{ width: '100%' }}
        data={RestrauntData}
        renderItem={restrauntListView}
      />
    </SafeAreaView>
  );
};

RestrauntsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'YourHomie!',
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
    margin: 5,
    padding: 5,
    backgroundColor: Colors.backColor
  }
});

export default RestrauntsScreen;
