import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Youtuber from '../../Data/Youtuber';
const getYoutuberName = (id) => {
    const youtuber = Youtuber.find(youtuber => youtuber.id === id);
    return youtuber ? youtuber.name : 'Unknown Youtuber';
  };

export default function PlaylistSubs(props) {
    const { userid } = props;
    const subcribes = useSelector(state => state.Slice.subcribes);
    const videoarr = useSelector(state => state.Slice.videoarr);
    
    const youtuberIds = subcribes.filter(item => item.userid === userid).map(item => item.youtuberid);
    const filteredVideoList = videoarr.filter(item => youtuberIds.includes(item.idYoutuber));
    console.log(filteredVideoList)
    return (
        <FlatList
            data={filteredVideoList}
            keyExtractor={(item) => item.keyvideo.toString()}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.anObject}
                        onPress={() => props.navigation.navigate('Watch', { keyvideo: item.keyvideo, userid: userid })}
                    >
                    <Image style={styles.image} source={{ uri: item.thumbnail }} />
                    <Text style={styles.title}>{ item.title}</Text>
                    <Text>{getYoutuberName(item.idYoutuber)}</Text>
                </TouchableOpacity>
                </View>
                
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    anObject: {
        justifyContent: 'center',
        padding: 20,
        elevation: 4,
        borderColor: 'black',

    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 20,
        borderWidth: 1
    }
});

