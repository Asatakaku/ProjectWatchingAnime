import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import WatchingScreen from '../Screen/WatchingScreen';
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

export default function Navigator() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={(props) => IconBottomTab(props)}>
        <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Trang chủ', headerShown: false }} />
        <Tab.Screen name='Watch' component={WatchingScreen} options={{ title: 'Coi phim chill', headerShown: false}}/>
        </Tab.Navigator>
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
