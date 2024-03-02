import { useState , useEffect } from "react";
import { TouchableOpacity , Image , StyleSheet } from "react-native";
import * as Speech from 'expo-speech';


export default function Voice({word}){
    const speak = () => {
        Speech.speak(word);
      };

    return(
        <TouchableOpacity onPress={speak}>
        <Image
        source={require('../assets/sound.png')}
        style={styles.image}
     />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    image:{
      width:20,
      height:20
  }
  });
  