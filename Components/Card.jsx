import {View , Text , StyleSheet} from 'react-native'
export default function Card({title , content , extraStyles , icon}){


    return(
        <View style={{...styles.card , ...extraStyles}}>
            {icon &&
                <View style={styles.iconcontainer}>
                    {icon}
                </View>
            }
            <Text style={styles.text}>{title}</Text>
            {content}
        </View>
    )
}
const styles =  StyleSheet.create({
    card:{
        width:250,
        minHeight:'auto',
        backgroundColor:'#8c92ac',
        borderRadius:15,
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30,
        backgroundColor:'lightblue',
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
    },
    iconcontainer:{
        width:50,
        height:40,
        position:'absolute',
        zIndex:10,
        right:0,
        direction:'flex',
        alignItems:'center',
        justifyContent:'center'
    },

})