//import liraries
import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants/constants';
import {Magicpen, Trash} from 'iconsax-react-native';
import {setColors} from '../../utils/functions/functions';
import {useNavigation} from '@react-navigation/native';
import {EDİTNOTE} from '../../utils/routes/routes';

// create a component
const NoteCard = ({note, index}) => {
  const navigation = useNavigation();
  const deleteNote = () => {
    firestore()
      .collection('Notes')
      .doc(note?.id)
      .delete()
      .then(() => {
        Alert.alert('Note Deleted');
      })
      .catch(error => {
        console.log(error);
      });
  };

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
        <Text>{note.date}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(EDİTNOTE, {note: note})}
            style={{
              backgroundColor: Colors.BLACK,
              borderRadius: 20,
              padding: 5,
              marginHorizontal: 5,
            }}>
            <Magicpen size="20" color={Colors.WHITE} variant="Bold" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={deleteNote}
            style={{
              backgroundColor: Colors.BLACK,
              borderRadius: 20,
              padding: 5,
              marginHorizontal: 5,
            }}>
            <Trash size="20" color={Colors.WHITE} variant="Bold" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default NoteCard;
