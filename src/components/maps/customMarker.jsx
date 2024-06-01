//import liraries
import React, {Component} from 'react';
import {Location} from 'iconsax-react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';

// create a component
const CustomMarker = () => {
  return (
    <View>
      <Location size="32" color={Colors.GREEN} variant="Bold" />
    </View>
  );
};

export default CustomMarker;
