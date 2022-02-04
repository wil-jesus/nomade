
import React, { useState, useCallback, useRef } from "react";
import { Button, View,StyleSheet, Alert,ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YoutubePlayer from "react-native-youtube-iframe";

function SulScreen({ navigation }) {
  return (
    <View style={styles.container}>

 <View style={styles.button}>
   
    <Button  style={styles.button}
      title="Parana"
      onPress={() => navigation.navigate('Parana')}/> 

</View>
<View style={styles.button}>
    <Button  style={styles.button}
      title="Rio Grande do Sul"
      onPress={() => navigation.navigate('Rgs')} />
    </View>

 <View style={styles.button}>
    <Button style={styles.button}
      title="Santa Catarina"
      onPress={() => navigation.navigate('Sct')}/>
    </View>

    </View>

  );
}
function ParanaScreen({ navigation }) {
  return (
   
       <View style={styles.container}>

<View style={styles.button}>
   <Button  style={styles.button}
     title="        Ilha do Mel        "
     onPress={() => navigation.navigate('Ilha')}/> 
</View>

<View style={styles.button}>
   <Button  style={styles.button}
     title="Londrina Maringa"
     onPress={() => navigation.navigate('Londrina')} />
   </View>

<View style={styles.button}>
   <Button style={styles.button}
     title="    Prudentopolis    "
     onPress={() => navigation.navigate('Prudentopolis')}/>
   </View>
   <View style={styles.button}>
    <Button  style={styles.button}
      title="    Fóz do Iguaçu     "
      onPress={() => navigation.navigate('Foz')}/> 
</View>
<View  style={styles.button}>
    <Button  style={styles.button}
      title="          Curitiba           "
      onPress={() => navigation.navigate('Curitiba')}/>
</View>

</View>
    
  );
}
function Rgs({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
    </View>
  );
}
function Sct({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
    </View>
  );
}
function  IlhaScreen(){
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ScrollView>
    <View>
      <YoutubePlayer
        height={235}
        play={playing}
        videoId={"Si9RaP30_ts"}
        onChangeState={onStateChange}
      />
       <YoutubePlayer
        height={235}
        play={playing}
        videoId={"O9zO2OGAhoA"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={235}
        play={playing}
        videoId={"j3a5WROy8F8"}
        onChangeState={onStateChange}
      />
      <YoutubePlayer
        height={235}
        play={playing}
        videoId={"4OjJ4qPzRxc"}
        onChangeState={onStateChange}
      />
     
      
    </View>
    </ScrollView>
  );
}
function CuritibaScreen({ navigation}){
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
function LondrinaScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button  style={styles.button}
      title="      Londrina        "
      onPress={() => navigation.navigate('Londrina')} />
    </View>
  );
}
function PrudentopolisScreen({ navigation}) {
    return(
      
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Button  style={styles.button}
    title="    Prudentopolis    "      
    onPress={() => navigation.navigate('Prudentopolis')}/>

    </View>
    );
}
  function FozScreen({ navigation}) {
    return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <Button  style={styles.button}
    title="    Foz do Iguaçu    "
    onPress={() => navigation.navigate('Foz')}/>

  </View>
);
}
const Stack = createNativeStackNavigator();

export default function RegSul() {   
  return (
    <Stack.Navigator>
      <Stack.Screen name="Região Sul" component={SulScreen} />
      <Stack.Screen name="Parana" component={ParanaScreen} />
      <Stack.Screen name="Rio Grande do Sul" component={Rgs} />
      <Stack.Screen name="Santa Catarina" component={Sct} />
      <Stack.Screen name="Londrina" component={LondrinaScreen} />
      <Stack.Screen name="Curitiba" component={CuritibaScreen} />      
      <Stack.Screen name="Prudentopolis" component={PrudentopolisScreen} />
      <Stack.Screen name="Ilha" component={IlhaScreen} />
      <Stack.Screen name="Foz" component={FozScreen} />

    
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
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


