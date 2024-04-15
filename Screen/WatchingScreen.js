import { StyleSheet, Button, View } from "react-native";
import React from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import VideoData from "../Data/VideoData";
export default function WatchingScreen(props) {
  const { youtubelink } = props.route.params
  const link = VideoData.find(item => item.youtubelink === youtubelink)
  const cutLink = link.youtubelink.substring(17,28).toString()
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={true}
        videoId= {cutLink}
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