//import liraries
import React, {Component, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustomInput from '../../components/uı/customInput';
import {Colors} from '../../theme/colors';
import {Calendar, NoteAdd, NoteText, SearchNormal} from 'iconsax-react-native';
import {ScreensStyle} from '../../styles/screensStyle';
import CustomButton from '../../components/uı/customButton';
import {NOTES} from '../../utils/routes/routes';

// create a component
const EditNote = ({route}) => {
  const {note} = route?.params;
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [date, setDate] = useState(note.date);
  const [loading, setLoading] = useState(false);
  const saveForm = () => {
    setLoading(true);
    const form = {
      title: title,
      description: description,
      date: date,
    };
    firestore()
      .collection('Notes')
      .doc(note?.id)
      .update(form)
      .then(() => {
        Alert.alert('Note Updated');
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <View style={ScreensStyle.container}>
      <CustomInput
        onChangeText={value => setTitle(value)}
        value={title}
        inputTitle="Title"
        icon={<NoteAdd color={Colors.GRAY} />}
        placeholder="Title..."
      />
      <CustomInput
        onChangeText={value => setDescription(value)}
        value={description}
        inputTitle="Description"
        icon={<NoteText color={Colors.GRAY} />}
        placeholder="Description..."
      />
      <CustomInput
        onChangeText={value => setDate(value)}
        value={date}
        inputTitle="Date"
        icon={<Calendar color={Colors.GRAY} />}
        placeholder="Date..."
      />

      <View style={{flex: 1, justifyContent: 'center'}}>
        {
          <CustomButton
            loading={loading}
            onPress={() => saveForm()}
            title="EDİT NOTE"
          />
        }
      </View>
    </View>
  );
};

//make this component available to the app
export default EditNote;
