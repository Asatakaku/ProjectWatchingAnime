import { useSelector } from "react-redux";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
export default function UserVideo(props) {
    const { userid } = props.userid;
    const VideoList = props.VideoList;
    return (
        <FlatList
                    data={VideoList}
                    keyExtractor={(item) => item.keyvideo.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Watch', { keyvideo: item.keyvideo, userid: userid })}
                        >
                            <View style={{ width: 200, height: 100, paddingLeft: 10}}>
                            <Image
                                style={{height: '100%', width: '100%', resizeMode:'center', borderRadius: 20}}
                                source={{ uri: item.thumbnail }}
                                />
                                <Text style={{fontSize: 8, fontWeight:'bold'}}>{item.title}</Text>
                            </View>
                               
                            </TouchableOpacity>
                        )}
                    horizontal
                />
    );
}