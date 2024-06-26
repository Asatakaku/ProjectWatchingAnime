import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import VideoData from '../../Data/VideoData';
import Youtuber from '../../Data/Youtuber';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addhistory } from '../../Slice/Slice';
const getYoutuberName = (id) => {
  const youtuber = Youtuber.find(youtuber => youtuber.id === id);
  return youtuber ? youtuber.name : 'Unknown Youtuber';
};


export default function Playlist(props) {
  const videoarr = useSelector(state => state.Slice.videoarr);
  const { userid } = props;
  const dispatch = useDispatch();
  return (
    <FlatList
      data={videoarr}
      keyExtractor={(item) => item.keyvideo.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Watch', { keyvideo: item.keyvideo, userid: userid });
            dispatch(addhistory({ userid: userid, keyvideo: item.keyvideo }));
          }}
        >
          <View style={styles.container}>
            <Image
              style={styles.thumbnail}
              source={{ uri: item.thumbnail }}
            />
            <Text style={styles.videoTitle}>{item.title}</Text>
            <Text style={styles.videoYoutuber}>{getYoutuberName(item.idYoutuber)}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    elevation: 4,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: '100%',
    height: 250,
    borderWidth: 1,
    borderRadius: 20,
    resizeMode:'center',
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
  },
  videoYoutuber: {
    fontSize: 10,
    fontWeight: '0.5',
    textAlign: 'left',
    marginTop: 5,
  },
});
