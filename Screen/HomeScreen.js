import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import VideoData  from '../Data/VideoData';
import Youtuber from '../Data/Youtuber';
export default function HomeScreen() {

  const getYoutuberName = (id) => {
    const youtuber = Youtuber.find(youtuber => youtuber.id === id);
    return youtuber ? youtuber.name : 'Unknown Youtuber';
  }

const renderItem = ({ item }) => (
  <TouchableOpacity>
    <View style={styles.container}>
      <Image 
          style={styles.thumbnail}
          source={{uri: item.thumbnail}}
      />
      <Text style={styles.videoTitle}>{item.title}</Text>
      <Text style={styles.videoYoutuber}>{getYoutuberName(item.idYoutuber)}</Text>
  </View>
  </TouchableOpacity>
)
  return (
      <FlatList
        data={VideoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.idYoutuber.toString()}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#&HEEEEEE&',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    marginBottom: 20
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign:'center',
  },
  videoYoutuber:{
    fontSize: 10,
    fontWeight: '0.5',
    textAlign: 'left',
    marginTop: 5,
  }
});
