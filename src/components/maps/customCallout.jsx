//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {Star} from 'iconsax-react-native';

// create a component
const CustomCallout = ({title, description, point}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Star size={16} color={Colors.ORANGE} variant="Bold" />
          <Text style={{fontSize: 12, fontWeight: '700', marginLeft: 5}}>
            {point}
          </Text>
        </View>
      </View>
      <Text style={{fontSize: 12, fontWeight: '500', color: Colors.GRAY}}>
        {description}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 80,
    backgroundColor: Colors.WHITE,
    padding: 5,
    borderRadius: 30,
  },
});

//make this component available to the app
export default CustomCallout;
