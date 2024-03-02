import { TouchableOpacity ,Text ,StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Button({text , color}){
    const navigation = useNavigation();
    function selectCategory(){
        navigation.navigate(text)
    }

    return(
        <TouchableOpacity style={{...styles.button , backgroundColor:color}} onPress={selectCategory}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width:200,
        height:100,
        borderRadius:10,
        margin:15 
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        margin:10,
    }
})