import {View, Text, StyleSheet, TextInput,TouchableOpacity,Button } from 'react-native';
import React  from 'react';
import MultiSelectComponent from '../components/Dropdown';
import Mylocation from '../components/Geolocation';
import { useDispatch } from 'react-redux';
import {addTodo} from '../Redux/todoslice';
import {useCallback, useState} from 'react';
import { useSelector } from 'react-redux';



const Home = ({navigation}) => {
 
  const [name,setName]=useState()
  const [age,setAge]=useState(null);
  const dispatch=useDispatch()
  const handleSubmit =()=>{
    dispatch(addTodo({name,age,}));
    setName('');
    setAge('');
  }
  // console.log(name)

  const todo=useSelector(state=>state.todo.items);
  console.log(todo)

  return (
    <View style={{backgroundColor: '#fcef', flex: 1}}>
      <Text style={styles.toptxt}>A Portfolio Maker</Text>
      <Text style={styles.fill}>Fill the details</Text>

      <TextInput placeholder="Enter your name here" style={styles.inp} value={name} onChangeText={setName}   />
      <TextInput placeholder="Enter your age here" style={styles.inp}  onChangeText={setAge} value={age} />
      <MultiSelectComponent />
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

        
        <Button onPress={handleSubmit} title="Add" />
    
       
     
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
