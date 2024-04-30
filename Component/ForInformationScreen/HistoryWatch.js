import { useSelector, useDispatch } from "react-redux";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { addhistory } from "../../Slice/Slice";
export default function HistoryWatch(props) {

    const HistoryList = props.HistoryList;
console.log(HistoryList)
const userid = props.userid;
const videoarr = useSelector(state => state.Slice.videoarr);
let his = videoarr.filter(item => HistoryList.map(item => item.keyvideo).includes(item.keyvideo));
his.sort((a, b) => {
    const indexA = HistoryList.map(item => item.keyvideo).indexOf(a.keyvideo);
    const indexB = HistoryList.map(item => item.keyvideo).indexOf(b.keyvideo);
    return indexA - indexB;
});
    const dispatch = useDispatch();
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