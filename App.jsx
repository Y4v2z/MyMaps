//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import CustomMarker from './src/components/maps/customMarker';

// create a component
const App = () => {
  const Markers = [
    {
      coordinate: {
        latitude: 40.7775818,
        longitude: 29.4008861,
      },
      title: 'Kasap Döner',
      description: 'En İyi Dönerci',
    },
    {
      coordinate: {
        latitude: 40.8275818,
        longitude: 29.3608861,
      },
      title: 'Esra Kebap',
      description: 'En İyi Kebapçı',
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

//make this component available to the app
export default App;
