//import liraries
import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {ScreensStyle} from '../../styles/screensStyle';
import {height, width} from '../../utils/constants/constants';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/uı/customButton';
import {Facebook, Google, Instagram} from 'iconsax-react-native';
import {SIGNIN, SIGNUP} from '../../utils/routes/routes';

// create a component
const Launch = ({navigation}) => {
  return (
    <SafeAreaView style={ScreensStyle.safeAreaView}>
      <View style={ScreensStyle.container}>
        <View style={{flex: 2}}>
          <Image
            source={require('../../assets/images/launch.png')}
            style={{
              width: width,
              height: height * 0.36,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 38,
              fontWeight: 'bold',
              color: Colors.BLACK,
            }}>
            Hello
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              lineHeight: 25,
            }}>
            Welcome to Harita Notum App. Where you manage you daily tasks
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            gap: 10,
          }}>
          <CustomButton
            onPress={() => navigation.navigate(SIGNIN)}
            title={'Sign In'}
          />
          <CustomButton
            onPress={() => navigation.navigate(SIGNUP)}
            title={'Sign Up'}
          />
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginTop: 35,
            }}>
            Sign Up Using
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Facebook size="32" color="#0866ff" variant="Bold" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Google size="32" color="#f47373" variant="Bold" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Instagram size="32" color={Colors.BLUE2} variant="Outline" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Launch;
