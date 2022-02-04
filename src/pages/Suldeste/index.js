import * as React from 'react';
import { Button, Text,TouchableOpacity,SafeAreaView,View,StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Separator = () => <View style={styles.separator} />;

 function RegiãoSuldeste(){

  return(

    <SafeAreaView style={styles.container}>
     
  <View style={styles.button}>
      <Button 
        title="Espirito Santo"
        onPress={() => navigation.navigate('Es')}
        />
  </View>

  <View style={styles.button}>
      <Button  style={styles.button}
        title="Rio de Janeiro"
        onPress={() => navigation.navigate('Rj')}
      />
  </View> 

  <View style={styles.button}>
      <Button  style={styles.button}
        title=" Minas  Gerais "
        onPress={() => navigation.navigate('Mg')}
      />
  </View>
        
      <View style={styles.button}>
        <Button  style={styles.button}
        title="    São Paulo    "
        onPress={() => navigation.navigate('Sp')}
      />
  </View>
    </SafeAreaView> 
  );
}

function EsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
     
    </View>
  );
}
function MgScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
    </View>
  );
}

function RjScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
    </View>
  );
}
function SpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function RegSuldeste() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Região Suldeste" component={RegiãoSuldeste} />
      <Stack.Screen name="Espirito Santo" component={EsScreen} />
      <Stack.Screen name="Minas Gerais" component={MgScreen} />
      <Stack.Screen name="Rio de Janeiro" component={RjScreen} />
      <Stack.Screen name="São Paulo" component={SpScreen} />
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

