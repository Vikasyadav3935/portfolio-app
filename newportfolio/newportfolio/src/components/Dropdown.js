import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { MultiSelect } from 'react-native-element-dropdown';
  import { useDispatch } from 'react-redux';
  import {addTodo} from '../Redux/todoslice';

  const data = [
    { label: 'React', value: 'React' },
    { label: 'React-Native', value: 'react-native' },
    { label: 'Redux-toolkit', value: 'reduxtoolkit' },
    { label: 'React-Router', value: 'React-Router' },
    { label: 'React-Navigation', value: 'navigation' },
    { label: 'Firebase', value: 'firebase' },
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' },
  ];

  const MultiSelectComponent = () => {
    const [selected, setSelected] = useState([]);
    const [focus,setFocus]=useState(1);

    const dispatch=useDispatch();

    
      
    

    return (
      <View style={styles.container}>
        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          search
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select Technology"
          searchPlaceholder="Search..."
          
          onBlur={()=>dispatch(addTodo({tech:selected}))}

          value={selected}
          onChange={item => {
            setSelected(item);
           
          }}
        //   renderLeftIcon={() => (
        //     <AntDesign
        //       style={styles.icon}
        //       color="black"
        //       name="Safety"
        //       size={20}
        //     />
        //   )}
          selectedStyle={styles.selectedStyle}
        />
      </View>
    );
  };

  export default MultiSelectComponent;

  const styles = StyleSheet.create({
    container: { padding: 16 },
    dropdown: {
      height: 50,
      backgroundColor: 'wheat',
      borderBottomColor: 'black',
      borderWidth: 1,
      borderRadius:10,
      width:'98%',
      alignSelf:'center',
      marginTop:7,
      paddingHorizontal:10

    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    selectedStyle: {
      borderRadius: 12,
    },
  });