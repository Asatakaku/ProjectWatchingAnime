import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addhistory } from '../../Slice/Slice';

export default function HistoryOnThisChannel(props) { 
    const HistoryList = props.Historylist;
    const userid = props.userid;
    const youtuber = props.youtuber;
    const dispatch = useDispatch();
    const videoarr = useSelector(state => state.Slice.videoarr);
    let his = videoarr.filter(item => HistoryList.map(item => item.keyvideo).includes(item.keyvideo) && item.idYoutuber === youtuber.id);
    his.sort((a, b) => {
        const indexA = HistoryList.map(item => item.keyvideo).indexOf(a.keyvideo);
        const indexB = HistoryList.map(item => item.keyvideo).indexOf(b.keyvideo);
        return indexA - indexB;
    });
    return (
        <FlatList
            data={his}
            keyExtractor={(item) => item.keyvideo.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Watch', { keyvideo: item.keyvideo, userid: userid });
                        dispatch(addhistory({ userid: userid, keyvideo: item.keyvideo }));
                    }}
                >
                    <View style={{ width: 200, height: 100, paddingLeft: 10 }}>
                        <Image
                            style={{ height: '100%', width: '100%', resizeMode: 'center', borderRadius: 20 }}
                            source={{ uri: item.thumbnail }}
                        />
                        <Text style={{ fontSize: 8, fontWeight: 'bold' }}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
            horizontal
        />
    );
}