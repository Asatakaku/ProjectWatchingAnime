import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { subscribe } from '../Slice/Slice';
import Subscriber from '../Component/ForSubscriberScreen/Subsciber';
import PlaylistSubs from '../Component/ForSubscriberScreen/PlaylistSubs';


export default function SubscriberScreen (props) {
    const subcribes = useSelector(state => state.Slice.subcribes);
    const youtube = useSelector(state => state.Slice.youtubearr);
    const { userid } = props.route.params;
    
        return (
            <View style={styles.container}>
                <Subscriber navigation={props.navigation} userid={userid} />
                <PlaylistSubs navigation={props.navigation} userid={userid}/>
            </View>
        );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    noFavoriteText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
});

