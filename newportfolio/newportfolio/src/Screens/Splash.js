import { useEffect } from 'react'
import { View, Text } from 'react-native'
import React  from 'react'

const Splash = ({navigation}) => {
  
  useEffect(()=>{
     setTimeout(() => {
      navigation.navigate('Home');
     }, 3000);
  },[])


  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:'800'}}>Porfolio App</Text>
    </View>
  )
}

export default Splash