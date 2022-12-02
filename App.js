import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeStack from './app/components/HomeStack';
import CheckInScreen from './app/components/CheckInScreen';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import ProfileTab from './app/components/ProfileTab';

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
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  const Tab = createBottomTabNavigator();

  const GroupsTab = () => (
    <View style={styles.container}>
      <Text>Groups!</Text>
    </View>
  );
  

  // const CheckinTab = () => (
  //   <View style={styles.container}>
  //     <Text>Checkin!</Text>
  //   </View>
  // );

  if (!fontsLoaded) {
    return <AppLoading/>;
  } else {

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
            } else if (route.name === 'CheckInScreen') {
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
        <Tab.Screen name="CheckInScreen" component={CheckInScreen} />
        <Tab.Screen name="Groups" component={GroupsTab} />
        <Tab.Screen name="Profile" component={ProfileTab} initialParams={{Profiles:
        {
          id: 1,
          image: Images.temp_profile,
          group1: Images.dog,
          group2: Images.cat,
          strongest1:'family', 
          strongest2: 'close friends',
          numofcheckins: '1000',
          name: 'Karson',
        }
    }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
