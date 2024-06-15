import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNOTE,
  CALLOUTDETAİL,
  EDİTNOTE,
  MYMAP,
  NOTES,
} from '../utils/routes/routes';
import MyMap from '../screens/map/myMap';
import {Colors} from '../theme/colors';
import CalloutDetail from '../screens/detail/calloutDetail';
import Notes from '../screens/notes/notes';
import AddNote from '../screens/notes/addNote';
import EditNote from '../screens/notes/editNote';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name={NOTES}
        component={Notes}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ADDNOTE} component={AddNote} />
      <Stack.Screen name={EDİTNOTE} component={EditNote} />
      <Stack.Screen
        name={MYMAP}
        component={MyMap}
        options={{headerShown: false}}
      />
      <Stack.Screen name={CALLOUTDETAİL} component={CalloutDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
