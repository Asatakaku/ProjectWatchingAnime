import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import VideoData  from '../Data/VideoData';
import Youtuber from '../Data/Youtuber';
import { Feather } from '@expo/vector-icons';
import Playlist from '../Component/Playlist';
import Login from './LoginScreen';
import LoginScreen from './LoginScreen';


export default function HomeScreen(props) {
  const { userid } = props.route.params;
  const link = Youtuber.find(item => item.id === userid)

  const ButtonA = ({ nameicon, left, top, nav }) => {
    return (
      <TouchableOpacity
        style={{ marginLeft: left, top: top }}
        onPress={() => {
          props.navigation.navigate(nav)
        }}
      >
        <View>
          <Feather name={nameicon} size={30} color="black" />
        </View>
      </TouchableOpacity>
    );
  }
  
  return (
    
    <View style={{ flex: 1 }} >
      <View style={{backgroundColor: '#fff', width: '100%', height: '10%', flexDirection:'row'}}>
      <Image style={styles.image} source={require('../img/logo.png')} />
        <Text style={{ marginLeft: '5%', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>My Anime</Text>
        <ButtonA nameicon={"search"} left='18%' top='5.5%' nav='Search'/>
        <ButtonA nameicon={"bell"} left='5%' top='5.5%' />
        <Image style={{width: '17%', height: 50, right: '5%', marginTop: 15, resizeMode: 'contain'}} source={{uri: link.icon}} />
      </View>
      <Playlist navigation={props.navigation} userid={ userid} />
      
    </View>
      
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: '17%',
    height: 'auto',
    borderRadius: 50
  }
})