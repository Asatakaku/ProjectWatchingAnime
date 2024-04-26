import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Youtuber  from '../Data/Youtuber'; // Chắc chắn import hàm getYoutuberName từ file utils
import { useSelector } from 'react-redux';
const getYoutuberName = (id) => {
    const youtuber = Youtuber.find(youtuber => youtuber.id === id);
    return youtuber ? youtuber.name : 'Unknown Youtuber';
};



export default function FavoriteScreen(props) {
    const listfav = useSelector(state => state.Slice.favoritevideos)
    const { userid } = props.route.params
    const filteredList = listfav.filter(item => item.userid === userid);

    if (filteredList.length === 0) {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.noFavoriteText}>Không có video yêu thích.</Text>
            </View>
        );
    }

    return (
        <FlatList
            style={{top: 0}}
            data={filteredList}
            keyExtractor={(item) => item.idfav.toString()}
            renderItem={({ item }) =>
                (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Watch', { keyvideo: item.keyvideo, idyoutuber: item.idYoutuber })} // Sử dụng item.idYoutuber thay vì idyoutuber
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
                )
            }
            
        />
    );
}

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
    noFavoriteText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
});
