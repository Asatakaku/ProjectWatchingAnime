import { StyleSheet, Button, View } from "react-native";
import React from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
export default function WatchingScreen() {

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={true}
        videoId="S2WBoZVzKOA"

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
 
})