import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FAVOURİTES, MYMAP, NOTES, PROFILE} from '../utils/routes/routes';
import MyMap from '../screens/map/myMap';
import Notes from '../screens/notes/notes';
import Profile from '../screens/profile/profile';
import {Colors} from '../theme/colors';
import Favourites from '../screens/favourites/favourites';
import TabIcon from '../components/router/tabIcon';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.BLACK,
        tabBarInactiveTintColor: Colors.GRAY,
        headerTitleAlign: 'center',
        headerBackTitle: 'Geri',
        // tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
      })}>
      <Tab.Screen
        name={MYMAP}
        component={MyMap}
        options={{headerShown: false}}
      />
      <Tab.Screen name={FAVOURİTES} component={Favourites} />
      <Tab.Screen
        name={NOTES}
        component={Notes}
        // options={{
        //   headerRight: () => (
        //     <LogoutCurve
        //       size={30}
        //       color={Colors.BLACK}
        //       variant="Bold"
        //       onPress={signOut}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
