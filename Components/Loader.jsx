import { View , Text , StyleSheet } from "react-native";

export default function Loader(){

    return(
        <View>
            <Text style={styles.loader}>Loading ... </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loader:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30
    }
})