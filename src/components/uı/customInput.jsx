//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {height} from '../../utils/constants/constants';
import {SearchNormal} from 'iconsax-react-native';

// create a component
const CustomInput = props => {
  const {icon} = props;
  return (
    <View style={styles.container}>
      {icon}
      <TextInput
        {...props}
        style={{
          height: height * 0.07,
          fontSize: 18,
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f2f4',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

//make this component available to the app
export default CustomInput;
