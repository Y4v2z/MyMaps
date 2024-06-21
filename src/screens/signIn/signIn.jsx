//import liraries
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {ScreensStyle} from '../../styles/screensStyle';
import {height, width} from '../../utils/constants/constants';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/uı/customButton';
import CustomInput from '../../components/uı/customInput';
import {Key, User} from 'iconsax-react-native';

// create a component
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const setUserUıd = async id => {
    try {
      await AsyncStorage.setItem('uid', id);
    } catch (e) {
      // saving error
      console.log('save error', e);
    }
  };
  const handleSignIn = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log('user SigIn');
        setUserUıd(data.user.uid);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={ScreensStyle.safeAreaView}>
      <View style={ScreensStyle.container}>
        <View style={{flex: 2}}>
          <Image
            source={require('../../assets/images/signIn.png')}
            style={{
              width: width,
              height: height * 0.36,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 38,
              fontWeight: 'bold',
              color: Colors.BLACK,
              textAlign: 'center',
            }}>
            Sign In
          </Text>
          <CustomInput
            value={email}
            onChangeText={setEmail}
            inputTitle="E-mail"
            placeholder="E-mail"
            icon={<User color={Colors.BLACK} />}
          />
          <CustomInput
            value={password}
            onChangeText={setPassword}
            inputTitle="Password"
            placeholder="Password"
            icon={<Key color={Colors.BLACK} />}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <CustomButton
            loading={loading}
            onPress={() => handleSignIn()}
            title={'Sign In'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
