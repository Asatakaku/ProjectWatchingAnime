  import { NavigationContainer } from '@react-navigation/native';
  import { RefreshControl, StyleSheet, Text, View } from 'react-native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import HomeScreen from '../Screen/HomeScreen';
  import { FontAwesome5 } from '@expo/vector-icons';
  import { Feather } from '@expo/vector-icons';
  import { createStackNavigator } from '@react-navigation/stack';
  import WatchingScreen from '../Screen/WatchingScreen';
  import FavoriteScreen from '../Screen/FavoriteScreen';
  import { useState } from 'react';
  import { MaterialIcons } from '@expo/vector-icons';
  import Playlist from '../Component/Playlist';
  import Slice from '../Slice/Slice';
  import LoginScreen from '../Screen/LoginScreen';
import Youtuber from '../Data/Youtuber';
import SearchScreen from '../Screen/SearchScreen';
import { AntDesign } from '@expo/vector-icons';
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const IconBottomTab = (props) => {
      return {
          tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (props.route.name === 'Home') {
                  iconName = focused ? 'home' : 'home';
              return <FontAwesome5 name={iconName} size={size} color={color} />;
          }
              else if (props.route.name === 'Favorite') {
                iconName = focused ? 'favorite' : 'favorite-border'
                return <MaterialIcons name="favorite-border" size={size} color={color} />;
          }
              else  if (props.route.name === 'user') {
                iconName = focused ? 'user' : 'user'
                return <AntDesign name="user" size={24} color="black" />;
              }
              
          }
      };
  };



export default function Navigator() {
const BottomTab = (props) => {
  const {id} = props.route.params
      return (
        <Tab.Navigator screenOptions={(props) => IconBottomTab(props)}>
          <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Trang chủ', headerShown: false}} initialParams={{idyoutuber: id }} />
          <Tab.Screen name='Favorite' component={FavoriteScreen} options={{ title: 'Yêu thích', headerShown: false }} />
          <Tab.Screen name='user' component={FavoriteScreen} options={{ title: 'Thông Tin Cá Nhân', headerShown: false }} />
        </Tab.Navigator>
      )
    }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
          <Stack.Screen name='Watch' component={WatchingScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Playlist' component={Playlist} options={{ headerShown: false }} />
          <Stack.Screen name='Search' component={SearchScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

