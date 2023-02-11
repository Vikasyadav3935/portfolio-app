import { View, Text } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux';

const Final = () => {

  const todo=useSelector(state=>state.todo.items);
  console.log(todo)

  return (
    <View>
      <Text style={{fontSize:18,marginTop:30,alignSelf:'center'}}>Your Portfolio</Text>

      <View style={{alignSelf:'center',width:200,height:200,borderRadius:100,borderWidth:1}}>
      
      </View>
      <Text  style={{alignSelf:'center',marginTop:10,fontSize:18}}> Name : {}</Text>
      <Text  style={{alignSelf:'center',marginTop:10,fontSize:18}}> Age : {}</Text>
      <Text  style={{alignSelf:'center',marginTop:10,fontSize:18}}> Tech Stack : {}</Text>
      
    </View>
  )
}

export default Final