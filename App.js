import React, {useEffect, useState} from 'react';

import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Homescreen from './src/Home';
import Addgender from './src/addgender';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function App() {
  const [registerUser, setRegisterUser] = useState(false);
  useEffect(() => {
    async function isUserRegister() {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setRegisterUser(true);
      }
    }
    isUserRegister();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {registerUser == false && (
          <Stack.Screen name="addgender" component={Addgender} />
        )}
        <Stack.Screen
          name="home"
          component={Homescreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
