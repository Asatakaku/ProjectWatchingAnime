import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, RefreshControl, ScrollView } from 'react-native';
import VideoData  from '../Data/VideoData';
import Youtuber from '../Data/Youtuber';
import { Feather } from '@expo/vector-icons';


export default function HomeScreen(props) {

  const getYoutuberName = (id) => {
    const youtuber = Youtuber.find(youtuber => youtuber.id === id);
    return youtuber ? youtuber.name : 'Unknown Youtuber';
  }

  const ButtonA = (props) => {
    return (
      <TouchableOpacity
          style={{marginLeft: props.left, top: props.top}}
      >
          <View>
        <Feather name= {props.name} size={30} color="black" />
      </View>
        </TouchableOpacity>
      
    );
}
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
  };
  const shuffledData = shuffleArray(VideoData);


  const [refresh, setrefresh] = useState(false)
  const pullMe = () => {
    setrefresh(true)
    setTimeout(() => {
      setrefresh(false)
    },500)
  }



  return (
    
    <View style={{ flex: 1 }} >
        
      <View style={{backgroundColor: '#fff', width: '100%', height: '10%', flexDirection:'row'}}>
      <Image style={{ resizeMode: 'contain', width: '17%', height: 'auto', borderRadius: 50 }} source={require('../img/logo.png')} />
        <Text style={{ marginLeft: '5%', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>My Anime</Text>
        <ButtonA name="search" left='28%' top='5.5%'/>
        <ButtonA name="bell" left='5%' top='5.5%'/>
      </View>
      <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={()=>pullMe()} />}>
      <FlatList
        data={shuffledData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Watch',{youtubelink: item.youtubelink})}
          >
            <View style={styles.container}>
              <Image 
                  style={styles.thumbnail}
                  source={{uri: item.thumbnail}}
              />
              <Text style={styles.videoTitle}>{item.title}</Text>
              <Text style={styles.videoYoutuber}>{getYoutuberName(item.idYoutuber)}</Text>
          </View>
          </TouchableOpacity>
          )}
        keyExtractor={(item) => item.idYoutuber.toString()}
      />
      </ScrollView>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#&HEEEEEE&',
    justifyContent: 'flex-start',
    padding: 20,
    marginBottom: 0,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: '100%',
    height: 250,
    borderWidth: 1,
    borderRadius:20,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign:'left',
  },
  videoYoutuber:{
    fontSize: 10,
    fontWeight: '0.5',
    textAlign:'left',
    marginTop: 5,
  }
});
