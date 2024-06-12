//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants/constants';
import {Magicpen} from 'iconsax-react-native';
import {setColors} from '../../utils/functions/functions';

// create a component
const NoteCard = ({note, index}) => {
  return (
    <View
      style={{
        backgroundColor: setColors(index),
        padding: 10,
        marginVertical: 8,
        borderRadius: 10,
        minHeight: height * 0.18,
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={{fontSize: 20, fontWeight: '500', color: Colors.BLACK}}>
          {note.title}
        </Text>
        <Text tyle={{fontSize: 18, fontWeight: '300', color: Colors.BLACK}}>
          {note.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>16 Eylül 2024</Text>
        <TouchableOpacity
          style={{backgroundColor: Colors.BLACK, borderRadius: 20, padding: 5}}>
          <Magicpen size="20" color={Colors.WHITE} variant="Bold" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default NoteCard;
