//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';

// create a component
const FloatActionButton = props => {
  const {icon, customStyle} = props;
  return (
    <TouchableOpacity {...props} style={[styles.container, customStyle]}>
      {icon}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    zIndex: 30,
    height: 60,
    width: 60,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

//make this component available to the app
export default FloatActionButton;
