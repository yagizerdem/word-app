import {View , Text , StyleSheet} from 'react-native'
export default function ErrorContainer({msg}){
    console.log(msg)

    return(
        <View>
            <Text style={styles.err}>{msg}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    err:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:30
    }
})
