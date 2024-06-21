//import liraries
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet} from 'react-native';
import {ScreensStyle} from '../../styles/screensStyle';
import CustomButton from '../../components/uı/customButton';
import Avatar from '../../components/uı/avatar';
import {Colors} from '../../theme/colors';
import {EDITUSERS} from '../../utils/routes/routes';
// create a component
const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const getUserUid = async () => {
    try {
      const uid = await AsyncStorage.getItem('uid');

      if (uid !== null) {
        getUserInfo(uid);
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  const removeUid = async () => {
    try {
      await AsyncStorage.removeItem('uid');
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  };
  const getUserInfo = userId => {
    firestore()
      .collection('Users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        console.log(documentSnapshot);
        // setUserData(documentSnapshot.data());
      });
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  // useEffect(() => {
  //   getUserInfo();
  //   getUserUid();
  // }, []);

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        removeUid();
      });
  };
  return (
    <View style={ScreensStyle.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Avatar user={userData} />
      </View>
      <View style={{flex: 3, alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          {userData?.name + ' ' + userData?.surname}
        </Text>
        <Text style={{fontSize: 16, fontWeight: '300', marginVertical: 5}}>
          {userData?.job}
        </Text>
        <Text style={{fontSize: 16, fontWeight: '300', marginVertical: 5}}>
          {userData?.email}
        </Text>
      </View>
      <View style={{paddingVertical: 20}}>
        <CustomButton
          onPress={() => navigation.navigate(EDITUSERS, {user: userData})}
          title="Edit User"
          style={{backgroundColor: Colors.GREEN}}
        />
        <CustomButton onPress={() => signOut()} title="Sign Out" />
      </View>
    </View>
  );
};

export default Profile;
