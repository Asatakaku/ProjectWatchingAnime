import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from '@expo/vector-icons';
export default function YoutuberInfo(props) { 
    //youtuber khi click vao icon cua watchingscreen
    const {youtuberid} = props.route.params;
    const youtubearr = useSelector(state => state.Slice.youtubearr);
    const youtuber = youtubearr.find(item => item.id === youtuberid);
    return (
        <View style={styles.container}>
            <Image style={styles.coverimage} source={{ uri: youtuber.coverimage }} />
            <AntDesign style={{top: 50, alignSelf:'flex-start', left: 5}} name="arrowleft" size={24} color="black" />
            <Image style={styles.icon} source={{uri: youtuber.icon}} />
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
    coverimage: {
        top:20,
        width: '100%',
        height: 150,
        marginTop: 20,
        // backgroundColor: '#rgb(0, 183, 255)',
        position: 'absolute',
        resizeMode: 'cover',
        borderWidth: 0.5,
        borderColor: 'black',
    },
    icon: {
        width: 100,
        height: 100,
        top: 180,
        borderRadius: 100,
        position: 'absolute',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor:'black'
    }
});