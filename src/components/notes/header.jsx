//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {height} from '../../utils/constants/constants';
import {Colors} from '../../theme/colors';
import CustomInput from '../uı/customInput';
import {SearchNormal} from 'iconsax-react-native';

// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <CustomInput
          icon={<SearchNormal color="#b2b2b2" />}
          placeholder="Search..."
        />
      </View>
      <View>
        <Text style={{fontSize: 32, fontWeight: '700', color: Colors.BLACK}}>
          Header
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    justifyContent: 'space-between',
    paddingTop: height * 0.02,
    paddingBottom: height * 0.06,
  },
});

//make this component available to the app
export default Header;
