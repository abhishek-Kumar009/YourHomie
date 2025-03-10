import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Feather}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;
