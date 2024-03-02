import { StyleSheet ,Text} from "react-native"
export default function Header(){


    return(
        <Text style={styles.head_}>
            Welcome
        </Text>
    )
}
const styles = StyleSheet.create({
    head_:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:40
    }
})