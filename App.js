import * as React from 'react';
import { View, Text, useAnimatedValue } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import * as FileSystem from 'expo-file-system';
import DictionaryScreen from './Screens/DictionaryScreen';
import QuizScreen from './Screens/QuizScreen';
import AiChatScreen from './Screens/AiChatScreen';
import ListWordScreen from './Screens/ListWordScreen';
import db from './data/db'
import { selectAll ,InsertRow  ,DeleteRow ,DeleteAllRecords} from './data/QueryObject';


const Stack = createNativeStackNavigator();

export default function App() {


  selectAll((data)=>{
    console.log(data)
  })


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dictionary" component={DictionaryScreen} />
      <Stack.Screen name="List Word" component={ListWordScreen} />
      <Stack.Screen name="quiz" component={QuizScreen} />
      <Stack.Screen name="Ai chat" component={AiChatScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}