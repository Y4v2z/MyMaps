import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CALLOUTDETAİL, MYMAP} from '../utils/routes/routes';
import MyMap from '../screens/map/myMap';
import {Colors} from '../theme/colors';
import CalloutDetail from '../screens/detail/calloutDetail';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={MYMAP}
        component={MyMap}
        options={{
          headerTransparent: true,
          headerTintColor: Colors.BLACK,
        }}
      />
      <Stack.Screen name={CALLOUTDETAİL} component={CalloutDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
