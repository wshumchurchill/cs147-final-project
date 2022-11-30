import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeStack from './app/components/HomeStack';

// function HomeScreen() {
// }

// const Stack = createStackNavigator();

// function PlayScreen ({ navigation, route }) {
//   return <WebView source={{ uri: route.params.preview }} />;

// }

// function SongDetails ({navigation, route}) {
//   return <WebView source={{ uri: route.params.detail }} />;
// }

export default function App() {

  const Tab = createBottomTabNavigator();

  const GroupsTab = () => (
    <View style={styles.container}>
      <Text>Groups!</Text>
    </View>
  );
  
  const ProfileTab = () => (
    <View style={styles.container}>
      <Text>Profile!</Text>
    </View>
  );

  const CheckinTab = () => (
    <View style={styles.container}>
      <Text>Checkin!</Text>
    </View>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Groups') {
              iconName = 'group'
            } else if (route.name === 'Profile') {
              iconName = 'user'
            } else if (route.name === 'Checkins') {
              iconName = 'check-circle'
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#14A5FF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Groups" component={GroupsTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
        <Tab.Screen name="Checkins" component={CheckinTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
