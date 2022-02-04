import React from "react";
import {Text, View, } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../Home";
import BalnearioCamburiu from "./BalnearioCamburiu";
import Blumenau from "./Blumenau";
import Bombinhas from "./Bombinhas";
import Florianoplis from "./Florianoplis";
import Itajai from "./Itajai";
import Joinville from "./Joinville";
import Penha from "./Penha";
import Pomeroide from "./Pomeroide";
import SFdoSul from "./SFdoSul";
import Ubirici from "./Ubirici";

const Stack = createNativeStackNavigator();

function BalnearioCamburiu() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function Blumenau(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function Bombinhas() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function Floripa(){
      return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function Itajai(){
      return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
function Joinville(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function Penha() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function Pomeroide(){
      return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function SFdoSul(){
      return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function Ubirici(){
    return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);
}
  
  
  const Stack = createNativeStackNavigator();
  
  export default function Sct() {
    return (
     
        <Stack.Navigator initialRouteName="BalnearioCamburiu">
          
          <Stack.Screen name="BalnearioCamburiu" component={BalnearioCamburiu} />
          <Stack.Screen name="Blumenau" component={Blumenau} />
          <Stack.Screen name="Bombinhas" component={Bombinhas} />
          <Stack.Screen name="Florianopolis" component={Floripa} />
          <Stack.Screen name="Itajai" component={Itajai} />
          <Stack.Screen name="Joinville" component={Joinville} />
          <Stack.Screen name="Penha" component={Penha} />
          <Stack.Screen name="Pomeroide" component={Pomeroide} />
          <Stack.Screen name="SFdoSul" component={SFdoSul} />
          <Stack.Screen name="Ubirici" component={Ubirici} />
          <Stack.Screen name="Itajai" component={Itajai} />
         

        </Stack.Navigator>
    
    );
  }