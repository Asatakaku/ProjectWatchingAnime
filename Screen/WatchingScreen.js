import { StyleSheet, Button, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import VideoData from "../Data/VideoData";
import Youtuber from "../Data/Youtuber";
import Playlist from "../Component/Playlist";
import { AntDesign } from '@expo/vector-icons';
export default function WatchingScreen(props) {
  const { youtubelink } = props.route.params
  const link = VideoData.find(item => item.youtubelink === youtubelink)
  const cutLink = link.youtubelink.substring(17, 28).toString()
  const youtuber = Youtuber.find(item => item.id === link.idYoutuber)
  const ButtonReact = (props) => {
    return (
      <TouchableOpacity style={{flexDirection:'row'}}>
        <AntDesign name={props.icon} size={24} color="black" />
        <Text style={{marginLeft: 20}}>{ props.like}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View>
      <YoutubePlayer
        height={290}
        play={true}
        videoId={cutLink}
      />
      <Text style={styles.text}>{link.title}</Text>
      <View style={styles.border}>
        <ButtonReact icon="like2" like={link.like} />
      </View>
      <View style={styles.border}>
        <Image style={{height: 50, width: 50, borderRadius: 20, alignSelf:'center', marginLeft: 5, resizeMode: 'center'}} source={{uri: youtuber.icon}} />
        <Text style={[styles.text, { marginLeft: 20, alignSelf: 'center' }]}>{youtuber.name}</Text>
        <Text style={{ fontSize: 12, alignSelf: 'center', marginLeft: 30, fontWeight: 'bold' }}>{youtuber.subcriber}</Text>
        <TouchableOpacity style={{borderRadius: 20, backgroundColor: 'red', height: 40, width: 120, marginLeft:30, alignSelf: 'center'}}>
            <Text style={{textAlign:'center', marginTop: 8, fontWeight: 'bold'}}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.border}>
        <Playlist navigation={props.navigation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  border: {
    marginTop: 30,
    borderWidth: 0.3,
    width: '100%',
    height: 'auto',
    padding: 10,
    borderColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  image: {
    height: '2%',
  }
})