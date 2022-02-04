import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './stackRoutes';
import Sul from '../pages/Sul';
import Suldeste from '../pages/Suldeste';



import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function Routes(){
  return(
      <Tab.Navigator
        screenOptions={{ 
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFF',

          tabBarStyle:{
            backgroundColor: '#202225',
            borderTopWidth: 0
          }

        }}
      >
        <Tab.Screen
          name="Home"
          component={StackRoutes}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />
            },
          }}
        />

        <Tab.Screen 
          name="Região Sul" 
          component={Sul} 
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" color={color} size={size} />
            }
          }}
        />
        <Tab.Screen 
          name="Suldeste" 
          component={Suldeste} 
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" color={color} size={size} />
            }
          }}
        />
       
      </Tab.Navigator>
  );
}
    