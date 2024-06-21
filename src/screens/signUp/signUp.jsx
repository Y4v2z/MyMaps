//import liraries
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import {ScreensStyle} from '../../styles/screensStyle';
import {height, width} from '../../utils/constants/constants';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/uı/customButton';
import CustomInput from '../../components/uı/customInput';
import {Key, User, Sms, Bag2} from 'iconsax-react-native';

// create a component
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [job, setJob] = useState('');
  const [loading, setLoading] = useState(false);
  const setUserUıd = async id => {
    try {
      await AsyncStorage.setItem('uid', id);
    } catch (e) {
      // saving error
      console.log('save error', e);
    }
  };
  const saveUser = userId => {
    const form = {
      userId: userId,
      name: name,
      surname: surname,
      job: job,
      email: email,
    };
    firestore()
      .collection('Users')
      .doc(userId)
      .set(form)
      .then(() => {
        console.log('user added success');
      })
      .catch(eror => {
        console.log(eror);
      });
  };
  const handleSignUp = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        saveUser(response.user.uid);
        setUserUıd(response.user.uid);
        console.log('User account created & signed in!');
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
      <ScrollView contentContainerStyle={{padding: 20}}>
        <Image
          source={require('../../assets/images/signIn.png')}
          style={{
            width: width,
            height: height * 0.36,
            resizeMode: 'contain',
          }}
        />
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Sign Up
          </Text>
          <CustomInput
            icon={<Sms color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setEmail(value)}
            value={email}
            inputTitle="Email"
            placeholder="Email"
          />
          <CustomInput
            icon={<Key color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setPassword(value)}
            secureTextEntry
            value={password}
            inputTitle="Password"
            placeholder="Password"
          />
          <CustomInput
            icon={<User color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setName(value)}
            value={name}
            inputTitle="Name"
            placeholder="Name"
          />
          <CustomInput
            icon={<User color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setSurname(value)}
            value={surname}
            inputTitle="Surname"
            placeholder="Surname"
          />
          <CustomInput
            icon={<Bag2 color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setJob(value)}
            value={job}
            inputTitle="Job"
            placeholder="Job"
          />
        </View>
        <View style={{marginVertical: 20, justifyContent: 'center'}}>
          <CustomButton
            loading={loading}
            onPress={() => handleSignUp()}
            title="Sign Up"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
