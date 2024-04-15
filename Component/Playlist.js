import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import VideoData  from '../Data/VideoData';
import Youtuber from '../Data/Youtuber';
import React, { useEffect, useRef, useState } from 'react';

const getYoutuberName = (id) => {
    const youtuber = Youtuber.find(youtuber => youtuber.id === id);
    return youtuber ? youtuber.name : 'Unknown Youtuber';
};

const Playlist = (props) => {
    const flatListRef = useRef(null);
    const [savedData, setSavedData] = useState({}); 
    const saveStateBeforeTabChange = () => {
        const offset = flatListRef.current ? flatListRef.current.contentOffset.y : 0;
        setSavedData({ offset, data: VideoData });
    };

    const restoreStateAfterTabChange = () => {
        if (flatListRef.current && savedData.offset) {
            flatListRef.current.scrollToOffset({ offset: savedData.offset, animated: false });
        }
    };

    // Lắng nghe sự kiện khi component unmount
    useEffect(() => {
        return () => {
            saveStateBeforeTabChange();
        };
    }, []);

    return (
        <FlatList
            ref={flatListRef}
            data={savedData.data || VideoData}
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
            keyExtractor={(item) => item.idYoutuber.toString()}
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

export default Playlist;
