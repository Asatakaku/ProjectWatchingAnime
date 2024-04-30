import { useSelector } from "react-redux";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";

export default function HistoryWatch(props) {

    const HistoryList = props.HistoryList;
    const { userid } = props.userid;
    console.log(HistoryList);
    const videoarr = useSelector(state => state.Slice.videoarr);
    const his = videoarr.filter(item => HistoryList.map(item => item.keyvideo).includes(item.keyvideo));
    return (
        <FlatList
            data={his.reverse()}
            keyExtractor={(item) => item.keyvideo.toString()}
            renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Watch', { keyvideo: item.keyvideo, userid: userid })}
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