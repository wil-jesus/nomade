import React from "react";
import { View,Button,StyleSheet,Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ParanScreen({ navigation }) {
    return (
      <View style={styles.container}>
     
   
<View style={styles.button}>
    <Button  style={styles.button}
      title="Ilha do Mel"
      onPress={() => navigation.navigate('IlhadoMel')}/> 
</View>


<View style={styles.button}>
    <Button  style={styles.button}
      title="Londrina Maringa"
      onPress={() => navigation.navigate('LondrinaMaringa')}/> 
</View>


<View style={styles.button}>
    <Button  style={styles.button}
      title="Prudentopolis"
      onPress={() => navigation.navigate('Prudentopolis')}/> 
</View>


<View style={styles.button}>
    <Button  style={styles.button}
      title="Fóz do Iguaçu"
      onPress={() => navigation.navigate('FozdoIguaçu')}/> 
</View> 


<View  style={styles.button}>
    <Button  style={styles.button}
      title="Curitiba"
      onPress={() => navigation.navigate('Curitiba')}/>
</View>
</View>
    );
  }
 
  function  IlhadoMe({ navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.button}>
    <Button  style={styles.button}
      title="Ilha do Mel"
      onPress={() => navigation.navigate('IlhadoMel')}/> 
</View> 
      </View>
    );
  }
  function Curitiba({ navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View  style={styles.button}>
    <Button  style={styles.button}
      title="       Curitiba        "
      onPress={() => navigation.navigate('Curitiba')}/>
</View>
      </View>
    );
  }
  function LondrinaMaringa({ navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button  style={styles.button}
      title="    Londrina Maringa    "        
      onPress={() => navigation.navigate('LondrinaMaringa')}/>
      </View>
    );
  }
  function Prudentopoli({ navigation}) {
      return(
        
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button  style={styles.button}
      title="    Prudentopolis    "      
      onPress={() => navigation.navigate('Prudentopolis')}/>

      </View>
      );
  }
    function FozdoIguac({ navigation}) {
      return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
    </View>
  );
}
  
  
  const Stack = createNativeStackNavigator();
  
  export default function RegPr() {
    return (
     
      <Stack.Navigator>

      <Stack.Screen name="Parana" component={ParanScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Curitiba" component={Curitiba} />
      <Stack.Screen name="Ilha do Mel" component={IlhadoMe} />
      <Stack.Screen name="Prudentopolis" component={Prudentopoli} />
      <Stack.Screen name="Londrina Maringa" component={LondrinaMaringa} />
      <Stack.Screen name="Foz do Iguaçu" component={FozdoIguac} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FFFF',
  },
  Text:{
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 20,
    marginBottom: 20,
  },
  button:{
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 50,
  },
  separator: {
    fontSize: 40,
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },});