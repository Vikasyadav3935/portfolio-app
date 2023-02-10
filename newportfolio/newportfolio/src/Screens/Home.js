import {View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import React from 'react';
import MultiSelectComponent from '../components/Dropdown';
import Mylocation from '../components/Geolocation';

import {useState} from 'react';



const Home = ({navigation}) => {
  const [name,setName]=useState(null)
  const [age,setAge]=useState(null);


  return (
    <View style={{backgroundColor: '#fcef', flex: 1}}>
      <Text style={styles.toptxt}>A Portfolio Maker</Text>
      <Text style={styles.fill}>Fill the details</Text>

      <TextInput placeholder="Enter your name here" style={styles.inp} value={name} onChangeText={setName}   />
      <TextInput placeholder="Enter your age here" style={styles.inp}  onChangeText={setAge} value={age} />
      <MultiSelectComponent/>
      <Mylocation/>
      
      <TouchableOpacity style={{width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#ad3',height:40,borderRadius:10,borderWidth:1,marginTop:10}}
      onPress={()=>navigation.navigate('TakePhotoScreen',{
        name:name,
        age:age,
        
      })} 
      >
            <Text>
            open camera
            </Text>
        </TouchableOpacity>

        

    
       
     
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  toptxt: {
    fontSize: 20,
    marginTop: 30,
    alignSelf: 'center',
    letterSpacing: 0.5,
    fontWeight: '700',
    color: 'black',
  },
  fill: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  inp: {
    width: '90%',
    borderWidth: 1,
    alignSelf: 'center',
    paddingHorizontal: 10,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'wheat',
    fontSize:17
  },
});
