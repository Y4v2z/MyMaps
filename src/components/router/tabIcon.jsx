//import liraries
import React, {Component} from 'react';
import {FAVOURİTES, MYMAP, NOTES, PROFILE} from '../../utils/routes/routes';
import {Profile, Heart, Notepad, Map} from 'iconsax-react-native';

// create a component
const TabIcon = ({name, size, color}) => {
  if (name == MYMAP) {
    return <Map size={size} color={color} variant="Bold" />;
  } else if (name == FAVOURİTES) {
    return <Heart size={size} color={color} variant="Bold" />;
  } else if (name == NOTES) {
    return <Notepad size={size} color={color} variant="Bold" />;
  } else if (name == PROFILE) {
    return <Profile size={size} color={color} variant="Bold" />;
  }
};

//make this component available to the app
export default TabIcon;
