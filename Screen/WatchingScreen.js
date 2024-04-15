import React from "react";
import { StyleSheet, View } from "react-native";
import Video from "react-native-video";

export default function WatchingScreen(){
    return (
        <View>
            <Video source={{ uri: "https://youtu.be/S2WBoZVzKOA?si=5oIKMTmREfm_yR19" }}
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo} />
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
})