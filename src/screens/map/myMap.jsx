//import liraries
import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Map} from 'iconsax-react-native';
import CustomMarker from '../../components/maps/customMarker';
import CustomCallout from '../../components/maps/customCallout';
import FloatActionButton from '../../components/uı/floatActionButton';
import {Colors} from '../../theme/colors';
import Geolocation from '@react-native-community/geolocation';

// create a component
const MyMap = () => {
  const [mapType, setMapType] = useState('standard');
  const Markers = [
    {
      coordinate: {
        latitude: 40.7775818,
        longitude: 29.4008861,
      },
      title: 'Kasap Döner',
      description: 'En İyi Dönerci',
      point: 3.5,
    },
    {
      coordinate: {
        latitude: 40.8275818,
        longitude: 29.3608861,
      },
      title: 'Esra Kebap',
      description: 'En İyi Kebapçı',
      point: 4.9,
    },
    {
      coordinate: {
        latitude: 40.8115818,
        longitude: 29.3168861,
      },
      title: 'Yavuz Tantuni',
      description: 'En İyi Tantuni',
      point: 4.7,
    },
  ];
  const changeMapType = () => {
    if (mapType === 'standard') {
      setMapType('satellite');
    } else {
      setMapType('standard');
    }
  };
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        console.log(pos.coords);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };
  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FloatActionButton
          icon={
            <Map
              size={40}
              color={mapType == 'standard' ? Colors.GREEN : Colors.ORANGE}
              variant={mapType == 'standard' ? 'Bold' : 'Outline'}
            />
          }
          customStyle={{
            right: 20,
            top: 20,
            backgroundColor:
              mapType == 'standard' ? Colors.WHITE : Colors.BLACK,
          }}
          onPress={() => changeMapType()}
          //   onPress={() => console.log('fsggsg')}
        />
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          mapType={mapType}
          style={styles.map}
          region={{
            latitude: 40.7812897,
            longitude: 29.3382882,
            latitudeDelta: 0.25,
            longitudeDelta: 0.5,
          }}>
          {Markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}>
              <CustomMarker />
              <Callout>
                <CustomCallout
                  title={marker.title}
                  description={marker.description}
                  point={marker.point}
                />
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,

    // height: 400,
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

//make this component available to the app
export default MyMap;
