import {
  Alert,
  ImageBackground,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Privatechat from './Privatechat';
import GroupChat from './groupChat';

const Tab = createBottomTabNavigator();
export default function Homescreen({navigation}) {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Privatechat} />
      <Tab.Screen name="Group" component={GroupChat} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  homeImage: {
    width: '100%',
    flex: 3,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
  infoBlock: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 15,
    color: '#acacac',
    marginBottom: 15,
  },
  loginInput: {
    borderRadius: 50,
    borderWidth: 1,
    padding: 8,
  },
  button: {
    backgroundColor: '#703efe',
    padding: 15,
    marginVertical: 10,
    width: '34%',
    elevation: 1,
    borderRadius: 50,
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
