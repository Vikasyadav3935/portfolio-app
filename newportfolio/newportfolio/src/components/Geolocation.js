import { View, Text,Button,PermissionsAndroid ,TouchableOpacity} from 'react-native'
import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo} from '../Redux/todoslice';


const Mylocation = () => {
  
    const [location, setLocation] = useState(false);
    const dispatch=useDispatch()

    const requestLocationPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Geolocation Permission',
              message: 'Can we access your location?',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          console.log('granted', granted);
          if (granted === 'granted') {
            console.log('You can use Geolocation');
            return true;
          } else {
            console.log('You cannot use Geolocation');
            return false;
          }
        } catch (err) {
          return false;
        }
      };


      const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
          console.log('res is:', res);
          if (res) {
            Geolocation.getCurrentPosition(
              position => {
                console.log(position);
                setLocation(position);
              },
              error => {
                // See error code charts below.
                console.log(error.code, error.message);
                setLocation(false);
              },
              {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
            );
          }
        });
        console.log(location);
      };


    

  return (
    <View>
        <TouchableOpacity style={{marginTop:10,width:'90%',alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#ad3',height:40,borderRadius:10,borderWidth:1}}
        onPress={()=>{
          getLocation()
          dispatch(addTodo({location:location}))}}
        >
            <Text>
                Add location to your portfolio
            </Text>
        </TouchableOpacity>
      {/* <Button title="Add Location" onPress={getLocation} /> */}
     
    </View>
  )
}

export default Mylocation