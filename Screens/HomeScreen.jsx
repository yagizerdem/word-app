import { View , Text ,StyleSheet } from "react-native";
import Button from "../Components/Button";
import Header from "../Components/Header";

export default function HomeScreen(){

    return(
        <View style={styles.container}>
            <Header></Header>
            <Button text={'Dictionary'} color='#8c92ac'></Button>
            <Button text={'List Word'} color='#33b864'></Button>
            <Button text={'quiz'} color='#8335b0'></Button>
            <Button text={'Ai chat'} color='#8c92ac'></Button>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        marginTop:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'column'
    }
})