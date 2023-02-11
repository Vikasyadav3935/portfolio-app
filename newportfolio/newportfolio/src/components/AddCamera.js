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

const TakePhotoScreen = ({route}) => {
  const {name,age} =route.params

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     {!avatarSource ?<Button title="Take Photo" onPress={takePhoto}/>: <View>
     <Text style={{fontSize:18,alignSelf:'center'}}>Your Portfolio</Text>
     <Image source={{uri:avatarSource}} style={{width:200,height:200, borderRadius:100,borderWidth:1}} />
     <Text  style={{alignSelf:'center',marginTop:10,fontSize:18}}> Name : {todo[0].name}</Text>
      <Text  style={{alignSelf:'center',marginTop:10,fontSize:18}}> Age : {todo[0].age}</Text>
      <Text  style={{alignSelf:'center',marginTop:10,fontSize:18}}> Tech Stack :
       {
        todo[0].tech.map(el=>(
          <Text>{el}</Text>
        ))
       }
      </Text>
      
      </View>}
     
    </View>
  );
};

export default TakePhotoScreen;
