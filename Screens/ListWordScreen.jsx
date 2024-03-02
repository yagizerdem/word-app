import { useEffect, useState } from "react"
import { View , Text, FlatList ,StyleSheet ,Image, TouchableOpacity } from "react-native"
import { selectAll , DeleteRow } from "../data/QueryObject"
import Loader from "../Components/Loader"

export default function ListWordScreen(){
    const [words , setWords]  = useState([])
    const [loadgin , setLoading] = useState(true)
    useEffect(()=>{
        selectAll((data)=>{
            setWords(data)
            setLoading(false)
        })
    },[])
    function delteRecored(record){
        DeleteRow(record.id)
        setWords(prev =>{
            return prev.filter((rec)=> rec.id != record.id)
        })
    }

    function renderItem({item}){
        return(
            <View style={styles.wordContainer}>
                <Text style={styles.title}>{item.word}</Text>
                <Text style={styles.desc}>
                {item.description}
                </Text>
                <TouchableOpacity style={styles.touchable} onPress={()=>delteRecored(item)} >
                    <Image source={require('../assets/trash.jpg')} style={styles.trash}></Image>
                </TouchableOpacity>
            </View>
        )
    }
    if(loadgin) {
        return        <View>
        <Loader></Loader>
    </View>
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={words}
            renderItem={renderItem}
            style={styles.flatlist}
            >
            </FlatList>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    flatlist:{
        width:300,
        height:500,
        margin:'auto'
    },
    wordContainer:{
        width:300,
        height:200,
        backgroundColor:'gray',
        margin:10
    },
    title:{
        backgroundColor:'blue',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        padding:5
    },
    desc:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
        margin:5
    },
    trash:{
        width:30,
        height:30,
    },
    touchable:{
        position:'absolute',
        right:15,
        marginTop:2.5,
    }
})