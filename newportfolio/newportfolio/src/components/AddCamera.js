import React, { useState } from 'react';
import { View, Button, Image,Text } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import { useSelector } from 'react-redux';
const options = {
  
  storageOptions: {
    
    path: 'images',
    mediaType:'photo'
  },
  // includeBase64: true,
};

const TakePhotoScreen = () => {


  const [avatarSource, setAvatarSource] = useState(null);

  const todo=useSelector(state=>state.todo.items);
  console.log(todo)

  const takePhoto = () => {
    launchCamera(options, (response) => {
      // console.log('res', response)
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        
        setAvatarSource(response.assets[0].uri);
        // console.log(response.assets[0].base64);
      }
    });
  };

  return (
    <View style={{ flex:1 }}>
     {!avatarSource ?<Button title="Take Photo" onPress={takePhoto}/>: <View style={{backgroundColor:'#834',flex:1}}>
     <Text style={{fontSize:18,alignSelf:'center',color:'#aaf', elevation:3,borderRadius:.3,padding:10,marginBottom:10,fontWeight:'700'}}>Your Portfolio</Text>
     <View style={{alignSelf:'center',width:200,height:200,borderRadius:100,borderWidth:1,elevation:5,borderColor:'red'}}>
     <Image source={{uri:avatarSource}} style={{width:198,height:198, borderRadius:100,borderWidth:1,alignSelf:'center',}} />
      </View>
     
     <Text  style={{alignSelf:'center',marginTop:10,fontSize:28,color:'orange'}}> Name : {todo[todo.length-1].name}</Text>
      <Text  style={{alignSelf:'center',marginTop:10,fontSize:28,color:'orange'}}> Age : {todo[todo.length-1].age}</Text>
      <Text  style={{alignSelf:'center',marginTop:10,fontSize:28,color:'orange'}}> Tech Stack :
      {todo[todo.length-1].tech.join(', ')}
      </Text>
      
      </View>}
     
    </View>
  );
};

export default TakePhotoScreen;
