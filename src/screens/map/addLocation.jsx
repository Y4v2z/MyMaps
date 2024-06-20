//import liraries
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {ScreensStyle} from '../../styles/screensStyle';
import {NoteAdd, NoteText, Calendar, Star1} from 'iconsax-react-native';
import CustomInput from '../../components/uı/customInput';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/uı/customButton';
// create a component
const AddLocation = ({route}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [point, setPoint] = useState('');
  const [loading, setLoading] = useState(false);
  const {coordinate} = route?.params;

  const saveNote = () => {
    setLoading(true);
    const form = {
      title: title,
      description: description,
      point: point,
      date: date,
      coordinate: coordinate,
    };
    firestore()
      .collection('Locations')
      .add(form)
      .then(() => {
        Alert.alert('Location added success');
      })
      .catch(eror => {
        console.log(eror);
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
        placeholder="Title"
        icon={<NoteAdd color={Colors.GRAY} />}
      />
      <CustomInput
        onChangeText={value => setDescription(value)}
        value={description}
        inputTitle="Description"
        placeholder="Description"
        icon={<NoteText color={Colors.GRAY} />}
      />
      <CustomInput
        onChangeText={value => setPoint(value)}
        value={point}
        inputTitle="Point"
        placeholder="Point"
        icon={<Star1 color={Colors.GRAY} />}
      />
      <CustomInput
        onChangeText={value => setDate(value)}
        value={date}
        inputTitle="Date"
        placeholder="Date"
        icon={<Calendar color={Colors.GRAY} />}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CustomButton
          loading={loading}
          onPress={() => saveNote()}
          title="Add Location"
        />
      </View>
    </View>
  );
};

export default AddLocation;
