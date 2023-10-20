import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {socket} from '..';

const Addgender = () => {
  const navigation = useNavigation();
  const createuser = async gender => {
    const milliseconds = new Date().getTime();
    const nanoseconds = BigInt(milliseconds) * BigInt(1e6);
    console.log(`anon${nanoseconds}`);
    await AsyncStorage.setItem('user', `anon${nanoseconds}`);
    socket.emit('createuser', `anon${nanoseconds}`, gender);
    navigation.replace('home');
  };
  return (
    <View style={styles.container}>
      <Text onPress={() => createuser('boy')} style={styles.boyStyle}>
        Boy
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boyStyle: {
    fontSize: 24,
    color: 'orangered',
  },
});
export default Addgender;
