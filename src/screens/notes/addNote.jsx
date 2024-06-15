//import liraries
import React, {Component, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/uı/customInput';
import {Colors} from '../../theme/colors';
import {Calendar, NoteAdd, NoteText, SearchNormal} from 'iconsax-react-native';
import {ScreensStyle} from '../../styles/screensStyle';
import CustomButton from '../../components/uı/customButton';

// create a component
const AddNote = () => {
  const [title, setTitle] = useState('Başlık');
  const [description, setDescription] = useState('Açıklama');
  const [date, setDate] = useState('Eylül 2024');
  const [loading, setLoading] = useState(false);
  const saveForm = () => {
    // setLoading(true);
    const form = {
      title: title,
      description: description,
      date: date,
    };
    // firestore()
    //   .collection('Notes')
    //   .add(form)
    //   .then(() => {
    //     console.log('Form added!');
    //   });
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
            title="ADD NOTE"
          />
        }
      </View>
    </View>
  );
};

//make this component available to the app
export default AddNote;
