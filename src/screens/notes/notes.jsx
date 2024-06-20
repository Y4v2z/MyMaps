//import liraries
import React, {Component, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, FlatList, StatusBar, RefreshControl} from 'react-native';
import FloatActionButton from '../../components/uı/floatActionButton';
import {Add} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import NoteCard from '../../components/notes/noteCard';
import {ScreensStyle} from '../../styles/screensStyle';
import Header from '../../components/notes/header';
import {ADDNOTE} from '../../utils/routes/routes';
import LoadingModal from '../../components/uı/loadingModal';

// create a component
const Notes = ({navigation}) => {
  const [notes, setNotes] = useState([]);
  const [pending, setPending] = useState(true);
  const getNotes = async () => {
    await firestore()
      .collection('Notes')
      .get()
      .then(querySnapshot => {
        const fetcedNotes = [];
        querySnapshot.forEach(documentSnapshot => {
          // console.log(documentSnapshot);
          fetcedNotes.push({
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            date: documentSnapshot.data().date,
          });
        });
        setNotes(fetcedNotes);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setPending(false));
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <View style={ScreensStyle.container}>
      <StatusBar backgroundColor={Colors.GRAY} barStyle={'dark-content'} />
      {pending ? (
        <LoadingModal visible={pending} />
      ) : (
        <FlatList
          RefreshControl={
            <RefreshControl refreshing={pending} onRefresh={getNotes} />
          }
          data={notes}
          renderItem={({item, index}) => <NoteCard note={item} index={index} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={Header}
        />
      )}

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
