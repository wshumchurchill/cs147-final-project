import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeStack from './app/components/HomeStack';
import GroupStack from './app/components/GroupStack';
import CheckInScreen from './app/components/CheckInScreen';
import CheckInTypePicker from './app/components/CheckInTypePicker';
import AppLoading from 'expo-app-loading';
import Camera from './app/components/Camera';
import PlayActivity from './app/components/PlayActivity';
import ActivityMain from './app/components/ActivityMain';
import CustomizeActivity from './app/components/CustomizeActivity';
// import ProfileTab from './app/components/ProfileTab';
import MainTab from './app/components/MainTab';

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


//const Tab = createBottomTabNavigator();

// Main Tab Navigator 
// function MainTabs() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeStack}/>
//         <Tab.Screen name="CheckInScreen" component={CheckInScreen} />
//         <Tab.Screen name="Groups" component={GroupStack}/>
//         <Tab.Screen name="Profile" component={ProfileTab}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

const RootStack = createNativeStackNavigator();

export default function App() {
  const RootStack = createNativeStackNavigator();
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

  if (!fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>

          <RootStack.Screen name="MainTab" component={MainTab}/>
          {/* <RootStack.Screen name="CheckInTypePicker" component={CheckInTypePicker} screenOptions={{headerShown: false}}/> */}
          {/* <RootStack.Screen name="ActivityMain" component={ActivityMain} screenOptions={{headerShown: false}}/>
          <RootStack.Screen name="PlayActivity" component={PlayActivity} screenOptions={{headerShown: false}}/>
          <RootStack.Screen name="CustomizeActivity" component={CustomizeActivity} screenOptions={{headerShown: false}}/>
          <RootStack.Screen name="Camera" component={Camera} screenOptions={{headerShown: false}}/> */}
          <RootStack.Screen name="ActivityMain" component={ActivityMain} />
          <RootStack.Screen name="PlayActivity" component={PlayActivity} />
          <RootStack.Screen name="CustomizeActivity" component={CustomizeActivity}/>
          <RootStack.Screen name="Camera" component={Camera} screenOptions={{headerShown: false}}/>
        </RootStack.Navigator>
      </NavigationContainer>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
