import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Youtuber from "../Data/Youtuber";

const ThongTinDienVao = ({ text, placeholder, onChangeText, value }) => {
  return (
      <View style={{ padding: 20, flexDirection: 'row', gap: 20, alignItems:'center', justifyContent:'flex-end' }}>
      <Text style={{ fontSize: 22 }}>{text}</Text>
      <TextInput
        style={styles.textinput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default function LoginScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.loginWord}>Login</Text>
      <ThongTinDienVao
        text='Tên tài khoản'
        placeholder='Tên tài khoản'
        onChangeText={setUsername}
        value={username}
          />
          <ThongTinDienVao
              text='Mật Khẩu'
              placeholder={'Mật khẩu'}
              onChangeText={setPassword}
              value={password}
          />

          <TouchableOpacity
        onPress={() => {
          const youtuber = Youtuber.find(item => item.username === username && item.password === password)
          if (youtuber) {         
            props.navigation.navigate('BottomTab', { id: youtuber.id });
            console.log('dumedcroi')
          }
          else {
            alert('Tài khoản không khớp!')
          }
              }}
              style={styles.button}>
              <Text style={{textAlign:'center', fontWeight:'bold'}}>Đăng nhập</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    justifyContent:'center'
  },
  loginWord: {
    fontSize: 30,
      fontWeight: 'bold',
    textAlign:'center'
  },
  textinput: {
    height: 40,
    width: 250,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    },
  button: {
      height: 40,
      width: 120,
      borderWidth: 1,
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginRight: 20,
      borderRadius: 5,
      backgroundColor: 'red'
  }
});
