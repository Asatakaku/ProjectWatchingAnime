import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { subscribe, notsubscribe } from "../Slice/Slice";
import VideoNoiBat from "../Component/ForYoutuberInfo/VideoNoiBat";
import HistoryOnThisChannel from "../Component/ForYoutuberInfo/HistoryOnThisChannel";
export default function YoutuberInfo(props) { 
    //youtuber khi click vao icon cua watchingscreen
    const {youtuberid, userid} = props.route.params;
    const youtubearr = useSelector(state => state.Slice.youtubearr);
    const youtuber = youtubearr.find(item => item.id === youtuberid);
    //subcriber
    const subscribes = useSelector(state => state.Slice.subcribes)
    const subcriber = subscribes.findIndex(item => item.youtuberid === youtuber.id && item.userid === userid) === -1 ? false : true;
  const [isSubscribed, setIsSubscribed] = useState(subcriber);
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

    //video noi bat
    const filteredvideo = useSelector(state => state.Slice.videoarr).filter(item => item.idYoutuber === youtuber.id)
    //Lich su xem
    const historywatch = useSelector(state => state.Slice.historywatch).filter(item => item.userid === userid)
    return (
        <View style={styles.container}>
            <Image style={styles.coverimage} source={{ uri: youtuber.coverimage }} />
            <TouchableOpacity
                style={{top: 50, alignSelf:'flex-start', left: 5}}
                onPress={() => props.navigation.goBack()} >
             <AntDesign  name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            <Image style={styles.icon} source={{ uri: youtuber.icon }} />
            <Text style={{ top: 260, fontWeight: 'bold', fontSize: 20 }}>{youtuber.name}</Text>
            <View style={{ top: 270, flexDirection:'row' }}>
                <Text style={{ fontWeight: 'normal', color: 'black' }}>Có </Text>
                <Text style={{ fontWeight: 'bold', color: 'red' }}>{youtuber.subcriber}</Text>
                <Text style={{ fontWeight: 'normal', color: 'black' }}> lượt đăng ký</Text>
            </View>
            {userid !== youtuber.id && (
                <TouchableOpacity
                onPress={handlePress}
                style={[styles.button, { backgroundColor: isSubscribed ? 'white' : 'red' }]}>
                <Text style={{ textAlign: 'center', marginTop: 8, fontWeight: 'bold', color: isSubscribed ? 'red' : 'white' }}>
                    {isSubscribed ? 'Đã đăng ký' : 'Đăng ký'}</Text>
                </TouchableOpacity>
            )}
            <View style={styles.VideoNoiBat}>
                <Text>Video nổi bật</Text>
                <VideoNoiBat navigation={props.navigation} ListNoiBat={filteredvideo} youtuber={youtuber} />
            </View>
            <View style={styles.HistoryListOnThisChannel}>
                <Text>Lịch sử xem của bạn trên kênh này</Text>
                <HistoryOnThisChannel navigation={props.navigation} Historylist={historywatch} youtuber={youtuber} userid = {userid} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    coverimage: {
        top:20,
        width: '100%',
        height: 150,
        marginTop: 20,
        // backgroundColor: '#rgb(0, 183, 255)',
        position: 'absolute',
        resizeMode: 'cover',
        borderWidth: 0.5,
        borderColor: 'black',
    },
    icon: {
        width: 100,
        height: 100,
        top: 180,
        borderRadius: 100,
        position: 'absolute',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor:'black'
    },
    button: {
        top: 280,
        width: 200,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'black',
        justifyContent: 'center',
    },
    VideoNoiBat: {
        top: 300,
        width: '100%',
        height: 200,
        left: 10,
        gap:10
    },
    HistoryListOnThisChannel: {
        top: 300,
        width: '100%',
        height: 200,
        left: 10,
        gap: 10
    }
});