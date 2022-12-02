import { View, Text } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// import FeedScreen from './FeedScreen';
// import CheckInDetails from './CheckInDetails';
// import ProfileTab from './ProfileTab';
import GroupManagementScreen from './GroupManagementScreen';
import MyGroupsScreen from './MyGroupsScreen';
import OtherGroupsScreen from './OtherGroupsScreen';
import OtherGroupsDetailsView from './OtherGroupsDetailsView';
import GroupCreationScreen from './GroupCreationScreen';
import ViewGroupDetails from './ViewGroupDetails';


export default function HomeStack() {
    const Stack = createStackNavigator();

    

    //profile tab doesn't work yet
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="GroupManagementScreen" component={GroupManagementScreen} />
            <Stack.Screen name="MyGroupsScreen" component={MyGroupsScreen}
            />
            <Stack.Screen name="OtherGroupsScreen" component={OtherGroupsScreen} 
            />
            <Stack.Screen name="GroupCreationScreen" component={GroupCreationScreen} 
            />
            <Stack.Screen name="ViewGroupDetails" component={ViewGroupDetails} 
            />
            {/* <Stack.Screen name="OtherGroupsDetailsView" component={OtherGroupsDetailsView} 
            />
             */}
            
        </Stack.Navigator>
    );
}