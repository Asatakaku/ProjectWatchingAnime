import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import VideoData  from '../Data/VideoData';
import Youtuber from '../Data/Youtuber';
import React, { useState } from 'react';

const getYoutuberName = (id) => {
    const youtuber = Youtuber.find(youtuber => youtuber.id === id);
    return youtuber ? youtuber.name : 'Unknown Youtuber';
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};




export default function Playlist(props) {
    
   
const shuffledData = shuffleArray(VideoData);
    return (
        <FlatList
            data={shuffledData}
            keyExtractor={(item) => item.keyvideo.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Watch', { youtubelink: item.youtubelink })}
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
        padding: 20,
        backgroundColor: '#fff',
    },
    thumbnail: {
        width: '100%',
        height: 250,
        borderWidth: 1,
        borderRadius: 20,
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
    }
});


