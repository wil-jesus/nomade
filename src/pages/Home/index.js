import React , { useState }from 'react';
import { View, Text, StyleSheet,Image ,TouchableOpacity} from 'react-native';

export default function Home({ navigation}){
  return(
    <View style ={styles.container}>
      <Text style ={styles.Text}>----------Pilota</Text>
     
      <TouchableOpacity >
      
    <Image style ={styles.imagem}
    source =
    {require('../../../assets/logo1.jpg')}/>
    </TouchableOpacity>
    
     <Text style ={styles.text}>Nômade----------</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#669CFF',
  },
  Text:{
    fontSize: 30,
    color: '#000',
    marginStart: 20,
    textShadowColor: '#FFF',                   
    textShadowOffset: {width: -1, height: 1},
    fontStyle: 'italic',

  },
  text:{
    fontSize: 30,
    color: '#000',
    marginStart: 10,
    textShadowColor: '#FFF',                   
    textShadowOffset: {width: -1, height: 1},
    fontStyle: 'italic',
  },
  imagem:{
    
    width:300,
    height:95,
    marginTop: 20,
    marginBottom: -10,
    borderRadius:70,
    marginTop: -10,
    
   
  
  }
})

