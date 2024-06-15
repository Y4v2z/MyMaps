//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, ActivityIndicator} from 'react-native';
import {Colors} from '../../theme/colors';

// create a component
const LoadingModal = ({visible}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            padding: 20,
            borderRadius: 10,
          }}>
          <ActivityIndicator size={'large'} color={Colors.BLUE} />
          <Text style={{marginTop: 10, fontSize: 18}}>Yükleniyor</Text>
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default LoadingModal;
