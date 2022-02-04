import React from "react";
import {Text, View, } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Canelas from "./Canelas";
import Gramado from "./Gramado";
import SerraGaucha from "./SerraGaucha";

function Canelas() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function  Gramado(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function  SerraGaucha(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  export default function Rgs() {
    return (
   
          <Stack.Navigator initialRouteName="Canelas">
          <Stack.Screen name="Canelas" component={Canelas} />
          <Stack.Screen name="Gramado" component={Gramado} />
          <Stack.Screen name="SerraGaucha" component={SerraGaucha} />

        </Stack.Navigator>
     
    );
  }
  