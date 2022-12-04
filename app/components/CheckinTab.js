// import { View, Text } from 'react-native';
// import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// // import HomeStack from './HomeStack';
// import CheckInScreen from './CheckInScreen';
// // import CheckInTypePicker from './CheckInTypePicker';

// export default function CheckinTab({navigation}) {
//     const Stack = createStackNavigator();
    

//     // need to add navigation to activities check in and photo check in
//     return (
//         <Stack.Navigator 
//             screenOptions={{
//                 headerShown: false
//             }}>
            
//             <Stack.Screen name="CheckInScreen" component={CheckInScreen} />
//             <Stack.Screen name="CheckInTypePicker" component={CheckInTypePicker}
//                 options={{
//                         ...TransitionPresets.ModalPresentationIOS,
//                     }}    
//             />
            
            
//         </Stack.Navigator>
//     );
// }