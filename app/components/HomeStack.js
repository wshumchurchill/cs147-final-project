import { View, Text } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import FeedScreen from './FeedScreen';
import CheckInDetails from './CheckInDetails';

export default function HomeStack() {
    const Stack = createStackNavigator();

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
            
        </Stack.Navigator>
    );
}