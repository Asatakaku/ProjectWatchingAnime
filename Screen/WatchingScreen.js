import { StyleSheet, Button, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, {useState} from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import VideoData from "../Data/VideoData";
import Youtuber from "../Data/Youtuber";
import Playlist from "../Component/Playlist";
import { AntDesign } from '@expo/vector-icons';
import { giamLike, tangLike, subscribe, notsubscribe } from "../Slice/Slice";
import { useDispatch, useSelector } from "react-redux";
export default function WatchingScreen(props) {
  const { keyvideo, userid } = props.route.params

//youtuber va video
  const link = VideoData.find(item => item.keyvideo === keyvideo)
  const cutLink = link.youtubelink.substring(17, 28).toString()
  const youtuber = Youtuber.find(item => item.id === link.idYoutuber)

//user: like
  const keySlice = useSelector(state => state.Slice.keyvideo)
  const [isLiked, setisLiked] = useState(false)
  const videoarr = useSelector(state => state.Slice.videoarr)
  const videofav = useSelector(state => state.Slice.favoritevideos)

  //user: subscribe
  const subscribes = useSelector(state => state.Slice.subcribes)
  const youtubearr = useSelector(state => state.Slice.youtubearr)
  const displays = {
    like: videoarr.findIndex(item => item.keyvideo === keyvideo) === -1 ? link.like : videoarr.find(item => item.keyvideo === keyvideo).like,
    icon: videoarr.findIndex(item => item.keyvideo === keyvideo) === -1 ? "like2" : (videofav.findIndex(item => item.keyvideo === keyvideo && item.userid === userid) === -1 ? "like2" : "like1"),
    subcriber: subscribes.findIndex(item => item.youtuberid === youtuber.id && item.userid === userid) === -1 ? false : true,
    sosubcribe: youtubearr.findIndex(item => item.id === youtuber.id) === -1 ? youtuber.subcriber : youtubearr.find(item => item.id === youtuber.id).subcriber,
  }
  const [isSubscribed, setIsSubscribed] = useState(displays.subcriber);
  const dispatch = useDispatch();
  const handlePress = () => {
    setIsSubscribed(prevState => !prevState);
    
    if (!isSubscribed) {
      dispatch(subscribe({userid: userid, youtuberid: youtuber.id}))
    }
    else if(isSubscribed) {
      dispatch(notsubscribe({userid: userid, youtuberid: youtuber.id}))
    }
  };
// Format number to K, M, B, T
  const formatNumber = (number) => {
    if (number >= 1000000000000) {
      return (number / 1000000000000).toFixed(0) + 'T';
    }
    else if (number >=  1000000000) {
      return (number / 1000000000).toFixed(0) + 'B';
    }
    else if (number >= 1000000) {
      return (number / 1000000).toFixed(0) + 'M';
    }
    else if (number >= 1000) {
      return (number / 1000).toFixed(0) + 'K';
    }
    return number.toString();
  }

  const ButtonReact = (props) => {
    return (
        <TouchableOpacity style={{flexDirection: 'row'}}
        onPress={() => {
          if (!isLiked) {
            dispatch(tangLike({ keySlice: keyvideo, userid: userid }));
            setisLiked(true)
            
          }
          else if (isLiked) {
            dispatch(giamLike({ keySlice: keySlice, userid: userid }))
            setisLiked(false)
          }
        }
          }
      >
        
        <AntDesign name={props.icon} size={24} color="black" />
        <Text style={{ marginLeft: 20 }}>{ formatNumber(props.like)}</Text>
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
      <View style={[styles.border, {justifyContent:'center'}]}>
        <ButtonReact icon={displays.icon} like={displays.like} />
      </View>
      <View style={[styles.border, {justifyContent:'flex-start'}]}>
        <Image style={{height: 50, width: 50, borderRadius: 20, alignSelf:'center', marginLeft: 5, resizeMode: 'center'}} source={{uri: youtuber.icon}} />
        <Text style={[styles.text, { marginLeft: 20, alignSelf: 'center', }]}>{youtuber.name}</Text>
        <Text style={{ fontSize: 12, alignSelf: 'center', marginLeft: 30, fontWeight: 'bold' }}>{formatNumber(displays.sosubcribe)}</Text>
        {userid !== youtuber.id && (
          <TouchableOpacity
            onPress={handlePress}
            style={[styles.button, { backgroundColor: isSubscribed ? 'white' : 'red' }]}>
            <Text style={{ textAlign: 'center', marginTop: 8, fontWeight: 'bold', color: isSubscribed ? 'red' : 'white' }}>
        {isSubscribed ? 'Đã đăng ký' : 'Đăng ký'}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.border}>
        <Playlist navigation={props.navigation} userid={ userid}/>
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
    
  },
  image: {
    height: '2%',
  },
  button: {
    borderRadius: 20,
    backgroundColor: 'red',
    height: 40,
    width: 120,
    marginLeft: 30,
    alignSelf: 'center'
  }
})