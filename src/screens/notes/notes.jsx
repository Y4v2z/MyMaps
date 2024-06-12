//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, StatusBar} from 'react-native';
import FloatActionButton from '../../components/uı/floatActionButton';
import {Add} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import NoteCard from '../../components/notes/noteCard';
import {ScreensStyle} from '../../styles/screensStyle';
import Header from '../../components/notes/header';
import {ADDNOTE} from '../../utils/routes/routes';

// create a component
const Notes = ({navigation}) => {
  const notes = [
    {
      id: 1,
      title: 'yazılım',
      description: 'yarın yazılım dersi var',
    },
    {
      id: 2,
      title: 'spor',
      description: 'yarın spor var',
    },
    {
      id: 3,
      title: 'yazılım',
      description: 'yarın yazılım dersi var',
    },
    {
      id: 4,
      title: 'spor',
      description: 'yarın spor var',
    },
    {
      id: 5,
      title: 'yazılım',
      description: 'yarın yazılım dersi var',
    },
    {
      id: 6,
      title: 'spor',
      description: 'yarın spor var',
    },
  ];
  return (
    <View style={ScreensStyle.container}>
      <StatusBar backgroundColor={Colors.GRAY} barStyle={'dark-content'} />
      <FlatList
        data={notes}
        renderItem={({item, index}) => <NoteCard note={item} index={index} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={Header}
      />
      <FloatActionButton
        icon={<Add size={30} color={Colors.WHITE} />}
        customStyle={{
          backgroundColor: Colors.BLACK,
          bottom: 20,
          right: 30,
        }}
        onPress={() => navigation.navigate(ADDNOTE)}
      />
    </View>
  );
};

//make this component available to the app
export default Notes;
