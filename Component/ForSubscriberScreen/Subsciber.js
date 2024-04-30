import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export default function Subscriber(props){
    const subcribes = useSelector(state => state.Slice.subcribes);
    const youtube = useSelector(state => state.Slice.youtubearr);
    const { userid } = props;
    const filteredList = subcribes.filter(item => item.userid === userid);
    if (filteredList.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.noFavoriteText}>Không có kênh đăng ký nào.</Text>
            </View>
        );
    }
    else {
        return (
            
            <View style={styles.container}>
                <FlatList
                    data={filteredList}
                    keyExtractor={(item) => item.idsubs.toString()}
                    renderItem={({ item }) =>
                    (
                        <TouchableOpacity style={styles.anObject}
                            // onPress={() => 
                        
                            // }
                        
                        >
                            <Image style={styles.image} source={{ uri: youtube.find(itemyb => itemyb.id === item.youtuberid).icon }} />
                            <Text>{youtube.find(itemyb => itemyb.id === item.youtuberid).name}</Text>
                        </TouchableOpacity>
                    )
                    }
                    horizontal
                />
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 30
    },
    noFavoriteText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
    anObject: {
        justifyContent: 'center',
        padding: 10,
    }
});
