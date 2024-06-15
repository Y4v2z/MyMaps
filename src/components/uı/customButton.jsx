//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants/constants';

// create a component
const CustomButton = props => {
  const {title, loading} = props;
  return (
    <TouchableOpacity
      disabled={loading}
      {...props}
      style={[
        styles.container,
        loading ? styles.disabledButton : styles.activeButton,
      ]}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{fontSize: 16, color: Colors.WHITE, fontWeight: '500'}}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.06,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: Colors.BLUE2,
  },
  disabledButton: {
    backgroundColor: Colors.ORANGE,
  },
});

//make this component available to the app
export default CustomButton;
