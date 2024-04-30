import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import UserVideo from "../Component/ForInformationScreen/UserVideo";


export default function InformationScreen(props) { 
    const { userid } = props.route.params;
    const youtubearr = useSelector(state => state.Slice.youtubearr);
    const user = youtubearr.find(item => item.id === userid)
    const [Coverimage, setCoverImage] = useState(user.coverimage);
    const [avatar, setAvatar] = useState(user.icon);
    const videoarr = useSelector(state => state.Slice.videoarr)
    const filteredVideo = videoarr.filter(item => item.idYoutuber === userid)
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
        quality: 1,
      });
        return result;
        
        
    };
    


    return (
        <View style={styles.container}>
            <Image source={{uri: Coverimage}} style={styles.anhbia} />
            <TouchableOpacity 
                onPress={async () => {
                    let result = await pickImage();
                    if(!result.cancelled) {
                        setCoverImage(result.assets[0].uri);
                        user.coverimage = result.assets[0].uri;
                    }
                }}
                style={{top: 105, alignSelf:'flex-end', right: 20,}}
            >
                <MaterialIcons name="camera-alt" size={25} color="black" />
            </TouchableOpacity>
            
            <Image source={{uri: avatar}} style={styles.avatar} />
            <TouchableOpacity 
                onPress={async () => {
                    let result = await pickImage();
                    if(!result.cancelled) {
                        setAvatar(result.assets[0].uri);
                        user.icon = result.assets[0].uri;
                    }
                }}
                style={{top: 220, alignSelf:'center'}}
            >
                <MaterialIcons name="camera-alt" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.name}>{user.name}</Text>
            <View style={styles.viewyourvideos}>
                 <Text style={{ fontWeight: '500' }}>Video của bạn</Text>
                {filteredVideo.length === 0 ? (
                    <Text style={{ textAlign:'center'}}>Không có video nào</Text>
                ) : (
                    <UserVideo navigation={props.navigation} userid={userid} VideoList={filteredVideo} />
                )}
            </View>
                
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    anhbia: {
        top:20,
        width: '100%',
        height: 150,
        marginTop: 20,
        // backgroundColor: '#rgb(0, 183, 255)',
        position: 'absolute',
        resizeMode: 'cover'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        top: 170,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
    },
    name: {
        top: 230,
        fontWeight: 'bold',
        fontSize: 30,
    },
    viewyourvideos: {
        top: 250,
        alignSelf: 'flex-start',
        height: 300,
        width: '100%',
        paddingLeft: 10,
        gap:20,
    },
})