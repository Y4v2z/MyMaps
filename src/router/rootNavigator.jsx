import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {
  ADDLOCATION,
  ADDNOTE,
  CALLOUTDETAİL,
  COORDİNATESELECT,
  EDİTNOTE,
  LAUNCH,
  MYMAP,
  NOTES,
  SIGNIN,
  SIGNUP,
  TAB,
} from '../utils/routes/routes';
import CalloutDetail from '../screens/detail/calloutDetail';
import AddNote from '../screens/notes/addNote';
import EditNote from '../screens/notes/editNote';
import SignIn from '../screens/signIn/signIn';
import SignUp from '../screens/signUp/signUp';
import Launch from '../screens/launch/launch';
import TabNavigator from './tabNavigator';
import CoordinateSelect from '../screens/map/coordinateSlect';
import AddLocation from '../screens/map/addLocation';

const Stack = createNativeStackNavigator();
function RootNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitle: 'Geri',
      }}>
      {!user ? (
        <Stack.Group>
          <Stack.Screen
            name={LAUNCH}
            component={Launch}
            options={{headerShown: false}}
          />
          <Stack.Screen name={SIGNIN} component={SignIn} />
          <Stack.Screen name={SIGNUP} component={SignUp} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            options={{headerShown: false}}
            name={TAB}
            component={TabNavigator}
          />
          <Stack.Screen name={ADDNOTE} component={AddNote} />
          <Stack.Screen name={EDİTNOTE} component={EditNote} />
          <Stack.Screen name={CALLOUTDETAİL} component={CalloutDetail} />
          <Stack.Screen name={COORDİNATESELECT} component={CoordinateSelect} />
          <Stack.Screen name={ADDLOCATION} component={AddLocation} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export default RootNavigator;
