import { View, Text } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeStack from './HomeStack';
import CheckInScreen from './CheckInScreen';

export default function CheckinTab({navigation, route}) {
    const Stack = createStackNavigator();
    const { Profiles } = route.params;

    // need to add navigation to activities check in and photo check in
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="CheckInScreen" component={CheckInScreen} />
            {/* <Stack.Screen name="HomeStack" component={HomeStack} /> */}
            
        </Stack.Navigator>
    );
}