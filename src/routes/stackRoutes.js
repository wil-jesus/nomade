import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Sul from '../pages/Sul';
import Suldeste from '../pages/Suldeste';
import Pr from '../pages/Sul/Pr';
import Ilha from '../pages/Sul/Pr/';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Sul"
        component={Sul}
      />
       <Stack.Screen
        name="Suldeste"
        component={Suldeste}
      />
      <Stack.Screen
      name="Parana"
      component={Pr}
      />
 <Stack.Screen
      name="Ilha"
      component={Ilha}
      />
        
     
</Stack.Navigator>
  )
}