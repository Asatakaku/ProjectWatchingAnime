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


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottomTab = (props) => {
    return {
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (props.route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
                
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
        }
    };
};

function BottomTab(){
  return (
    <Tab.Navigator screenOptions={(props) => IconBottomTab(props)}>
      <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Trang chủ', headerShown: false }} />
      <Tab.Screen name='Favorite' component={FavoriteScreen} options={{ title: 'Trang chủ', headerShown: false }} />
    </Tab.Navigator>
  )
}

export default function Navigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name='Watch' component={WatchingScreen} options={{ headerShown: false }} />
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

