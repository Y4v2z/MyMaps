//import liraries
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import {height} from '../../utils/constants/constants';

// create a component
const FavouriteCard = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: setColors(index),
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
      }}>
      <View
        style={{
          minHeight: height * 0.14,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {favorite.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginVertical: 8,
            fontWeight: '300',
          }}>
          {favorite.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>{favorite.date}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default FavouriteCard;
