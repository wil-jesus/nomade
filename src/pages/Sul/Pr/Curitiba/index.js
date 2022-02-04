import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert,ScrollView,StyleSheet} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function CuritibaScreen({Navigation}) {
 
  return (
    <ScrollView >
    <View style={styles.container}>
    <Button  style={styles.button}
      title="Curitiba"
      onPress={() => navigation.navigate('Curitiba')}/>
      
    </View>
    </ScrollView>
  );
}
const Stack = createNativeStackNavigator();

export default function Cidade({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Curitiba" component={CuritibaScreen} />
    </Stack.Navigator>
  );
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
});