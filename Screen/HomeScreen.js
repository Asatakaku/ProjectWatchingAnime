import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import VideoData  from '../Data/VideoData';
import Youtuber from '../Data/Youtuber';
import { Feather } from '@expo/vector-icons';
import Playlist from '../Component/Playlist';


export default function HomeScreen(props) {
  const ButtonA = (props) => {
    return (
      <TouchableOpacity
          style={{marginLeft: props.left, top: props.top}}
      >
          <View>
        <Feather name= {props.name} size={30} color="black" />
      </View>
        </TouchableOpacity>
      
    );
}
  return (
    
    <View style={{ flex: 1 }} >
        
      <View style={{backgroundColor: '#fff', width: '100%', height: '10%', flexDirection:'row'}}>
      <Image style={{ resizeMode: 'contain', width: '17%', height: 'auto', borderRadius: 50 }} source={require('../img/logo.png')} />
        <Text style={{ marginLeft: '5%', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>My Anime</Text>
        <ButtonA name="search" left='28%' top='5.5%'/>
        <ButtonA name="bell" left='5%' top='5.5%'/>
      </View>
      <Playlist navigation={ props.navigation} />
    </View>
      
  );
}

