//import liraries
import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';
import {Magicpen, Trash, Edit2} from 'iconsax-react-native';
import {setColors} from '../../utils/functions/functions';
import {useNavigation} from '@react-navigation/native';
import {EDİTNOTE} from '../../utils/routes/routes';
import {height} from '../../utils/constants/constants';

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
          {note.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginVertical: 8,
            fontWeight: '300',
          }}>
          {note.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>{note.date}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(EDİTNOTE, {note: note})}
            style={{
              backgroundColor: Colors.BLACK,
              borderRadius: 100,
              padding: 10,
              marginHorizontal: 5,
            }}>
            <Edit2 size="20" color={Colors.WHITE} variant="Bold" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteNote()}
            style={{
              backgroundColor: Colors.BLACK,
              borderRadius: 100,
              padding: 10,
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default NoteCard;
