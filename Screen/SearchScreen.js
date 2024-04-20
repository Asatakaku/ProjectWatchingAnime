import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';
export default function SearchScreen (){
    return (
        <View style={styles.container}>
            <View style={styles.inputcontainer}>
            <TextInput style={styles.textinput} placeholder="Bạn muốn tìm kiếm gì?"/>       
                <Feather name="search" size={30} color="black" style={styles.searchIcon} />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 20,
        alignItems: 'center',
        padding: 20
    },
    textInput: {
        width:'100%',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
    inputcontainer: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
        marginTop: 7,
        opacity: 0.25
      },
})