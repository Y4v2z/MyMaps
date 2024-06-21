//import liraries
import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, Text, StyleSheet} from 'react-native';
import {ScreensStyle} from '../../styles/screensStyle';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/uı/customButton';

// create a component
const CalloutDetail = ({route}) => {
  const {item} = route?.params;
  const [loading, setLoading] = useState(false);
  const addFavorite = () => {
    setLoading(true);
    firestore()
      .collection('Favorites')
      .add(item)
      .then(() => {
        Alert.alert('Location added favorite');
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.BLACK}}>
          Title:
        </Text>
        <Text style={{fontSize: 16, fontWeight: '300', color: Colors.BLACK}}>
          {item.title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.BLACK}}>
          Description:
        </Text>
        <Text style={{fontSize: 16, fontWeight: '300', color: Colors.BLACK}}>
          {item.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.BLACK}}>
          Point:
        </Text>
        <Text style={{fontSize: 16, fontWeight: '300', color: Colors.BLACK}}>
          {item.point}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.BLACK}}>
          Longitude:
        </Text>
        <Text style={{fontSize: 16, fontWeight: '300', color: Colors.BLACK}}>
          {item.coordinate.longitude}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.BLACK}}>
          Latitude:
        </Text>
        <Text style={{fontSize: 16, fontWeight: '300', color: Colors.BLACK}}>
          {item.coordinate.latitude}
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', marginVertical: 25}}>
        <CustomButton
          loading={loading}
          onPress={() => addFavorite()}
          title="Add Favorite"
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default CalloutDetail;
