import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNOTE,
  CALLOUTDETAİL,
  EDİTNOTE,
  LAUNCH,
  MYMAP,
  NOTES,
  SIGNIN,
  SIGNUP,
} from '../utils/routes/routes';
import MyMap from '../screens/map/myMap';
import {Colors} from '../theme/colors';
import CalloutDetail from '../screens/detail/calloutDetail';
import Notes from '../screens/notes/notes';
import AddNote from '../screens/notes/addNote';
import EditNote from '../screens/notes/editNote';
import SignIn from '../screens/signIn/signIn';
import SignUp from '../screens/signUp/signUp';
import Launch from '../screens/launch/launch';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitle: 'Geri',
      }}>
      <Stack.Screen
        name={LAUNCH}
        component={Launch}
        options={{headerShown: false}}
      />
      <Stack.Screen name={SIGNIN} component={SignIn} />

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
      <Stack.Screen name={SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
