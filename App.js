import { Pressable, Image, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Functional from "./app/components/Functional";
import Song_list from "./app/components/Song_list";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
