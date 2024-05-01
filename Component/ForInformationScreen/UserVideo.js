import { useSelector, useDispatch } from "react-redux";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { addhistory } from "../../Slice/Slice";
export default function UserVideo(props) {
    const  userid  = props.userid;
    const VideoList = props.VideoList;
    const dispatch = useDispatch();
    return (
        <FlatList
                    data={VideoList}
                    keyExtractor={(item) => item.keyvideo.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('Watch', { keyvideo: item.keyvideo, userid: userid });
                                dispatch(addhistory({ userid: userid, keyvideo: item.keyvideo }));
                            }}
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