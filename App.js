import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screen/HomeScreen';
import Navigator from './Navigation/Navigation';
import { Provider } from 'react-redux';
import store from './store/store';



export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
      );
}

