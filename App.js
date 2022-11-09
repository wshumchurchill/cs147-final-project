import { Pressable, Image, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Functional from "./app/components/Functional";
import Song_list from "./app/components/Song_list";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from "react-native-webview";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

function HomeScreen() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <Song_list tracks={tracks}/>
  } else {
    contentDisplayed = <Functional pressMe={getSpotifyAuth}></Functional>
  }


  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function PlayScreen ({ navigation, route }) {
  return <WebView source={{ uri: route.params.preview }} />;

}

function SongDetails ({navigation, route}) {
  return <WebView source={{ uri: route.params.detail }} />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="PlayScreen" component={PlayScreen} options={{
        headerStyle: {backgroundColor: 'black'},
        headerTitleStyle: {
          color: 'white'
        }
        }} />
      <Stack.Screen name="SongDetails" component={SongDetails} options={{
        headerStyle: {backgroundColor: 'black'},
        headerTitleStyle: {
          color: 'white'
        }
        }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
