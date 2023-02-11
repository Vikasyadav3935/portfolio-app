import {View,Text} from 'react-native';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import { store } from './App/Store';

const App=()=>{
  return (
  <Provider store={store}>
    
   <AppNavigator/>
   </Provider>
  )
}

export default App;