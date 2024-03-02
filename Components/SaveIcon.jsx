import { TouchableOpacity , Image , StyleSheet  ,Alert} from "react-native";
import { selectAll ,InsertRow  ,DeleteRow ,DeleteAllRecords} from '../data/QueryObject';

export default function SaveIcon({word , definition}){

    
    function save(){
        InsertRow(word , definition)
        Alert.alert("word saved")
    }

    return(
        <TouchableOpacity onPress={save}>
        <Image
        source={require('../assets/addlist.png')}
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