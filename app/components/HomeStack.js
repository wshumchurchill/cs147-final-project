import { View, Text } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import FeedScreen from './FeedScreen';
import CheckInDetails from './CheckInDetails';
import ProfileTab from './ProfileTab';
// import CheckInScreen from './CheckInScreen';

export default function HomeStack() {
    const Stack = createStackNavigator();

    

    //profile tab doesn't work yet
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="FeedScreen" component={FeedScreen} />
            <Stack.Screen name="CheckInDetails" component={CheckInDetails}
                options={{
                    ...TransitionPresets.ModalPresentationIOS,
                  }}    
            />
            {/* <Stack.Screen name="CheckInScreen" component={CheckInScreen} /> */}
            <Stack.Screen name="ProfileTab" component={ProfileTab} 
                // options={{
                //     ...TransitionPresets.ModalPresentationIOS,
                // }}
            />
            
            
        </Stack.Navigator>
    );
}