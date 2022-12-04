import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStack from './HomeStack';
import GroupStack from './GroupStack';
import CheckInScreen from './CheckInScreen';
import CheckInTypePicker from './CheckInTypePicker';
import AppLoading from 'expo-app-loading';
import ProfileTab from './ProfileTab';


export default function MainTab() {
    const Tab = createBottomTabNavigator();

    // const GroupsTab = () => (
    //   <View style={styles.container}>
    //     <Text>Groups!</Text>
    //   </View>
    // );


    // const CheckinTab = () => (
    //   <View style={styles.container}>
    //     <Text>Checkin!</Text>
    //   </View>
    // );

    return (
        // <NavigationContainer>
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
            <Tab.Screen name="Groups" component={GroupStack} />
            <Tab.Screen name="Profile" component={ProfileTab} initialParams={{
                Profiles:
                {
                    id: 1,
                    image: Images.temp_profile,
                    group1: Images.dog,
                    group2: Images.cat,
                    strongest1: 'Family',
                    strongest2: 'Close Friends',
                    numofcheckins: '1000',
                    name: 'Karson',
                }
            }} />
        </Tab.Navigator>
        // </NavigationContainer>
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