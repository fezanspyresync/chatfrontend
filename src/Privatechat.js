import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import {socket} from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const Chat = () => {
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getCurrentUserAndAllOtherUserData() {
      if (isFocused) {
        console.log('is called again');
        const user = await AsyncStorage.getItem('user');
        socket.emit('currentUser', {user, isLive: true});
        socket.on('getAllUsers', AllUsers => {
          console.log('AllUser', AllUsers);
        });
        return user;
      }
    }
    const user = getCurrentUserAndAllOtherUserData();
    if (!isFocused) {
      socket.emit('currentUserOffline', {user, isLive: false});
    }
    return () => {
      socket.emit('currentUserOffline', {user, isLive: false});
    };
  }, [isFocused]);

  console.log(isFocused);
  const data = [
    {key: 'Item 1'},
    {key: 'Item 2'},
    {key: 'Item 3'},
    {key: 'Item 4'},
    {key: 'Item 4'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.activeUserBar}></View>
      <FlatList
        data={data}
        numColumns={2} // Set the number of columns to 2
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              margin: 10,
              padding: 20,
              backgroundColor: 'lightgray',
              //   alignItems: 'center',
            }}>
            {/* <Text>{item.key}</Text> */}
            <Image
              style={styles.profilepic}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGm_sSq7ogWAjMwkg3wSab31ddsrjv852EA&usqp=CAU',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activeUserBar: {
    height: 100,
    backgroundColor: 'red',
  },
  profilepic: {
    height: 50,
    width: 50,
    borderRadius: 30,
    // resizeMode: 'cover',
  },
});
export default Chat;
