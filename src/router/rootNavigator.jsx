import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MYMAP} from '../utils/routes/routes';
import MyMap from '../screens/map/myMap';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name={MYMAP} component={MyMap} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
