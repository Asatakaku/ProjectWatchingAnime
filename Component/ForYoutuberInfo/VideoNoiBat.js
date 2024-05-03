import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addhistory } from "../../Slice/Slice";;
export default function VideoNoiBat(props) { 
    const { ListNoiBat, youtuber } = props;
    const userid = useSelector(state => state.Slice.userid);
    const dispatch = useDispatch();
    const sortedListNoiBat = [...ListNoiBat].sort((a, b) => b.like - a.like);
    return (
        <FlatList
            data={sortedListNoiBat}
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