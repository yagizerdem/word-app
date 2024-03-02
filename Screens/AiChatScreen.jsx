import { useEffect, useState } from "react";
import { View, Text , StyleSheet, TextInput, TouchableOpacity , ScrollView} from "react-native";
import OpenAI from "openai";


const apiKey = "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";
const openai = new OpenAI({apiKey});

export default function AiChatScreen() {
    const [query ,setquuery] = useState('')
    const [airesponse ,setairesponse] = useState(null)

  function handleResponse(){

        async function getData() {
            try {
              const completion = await openai.chat.completions.create({
                messages: [{"role": "user", "content": query}],
                model: "gpt-3.5-turbo",
              });
             setairesponse(completion.choices[0])    

            } catch (error) {
                console.error("Error:", error);
            }
        }
        getData();

  }


  return (
    <>

    <ScrollView style={styles.airesponse}>
    <Text style={{color:'#fff' , fontWeight:'bold', fontSize:20}}>{airesponse?.message.content}</Text>
 </ScrollView>
    <View style={styles.container}>
      <View style={styles.containerinput} >
        <TextInput style={styles.input} onChangeText={(e)=>setquuery(e)}></TextInput>
        <TouchableOpacity style={styles.button} onPress={handleResponse}>
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  containerinput:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    width:500,
    marginLeft:'50%',
    transform:[{translateX:-150}],
    position:'absolute',
    bottom:50
  },
  input:{
    width:200,
    height:60,
    backgroundColor:'#fff'
  },
  text:{
    color:'#fff',
    fontWeight:'bold',
    backgroundColor:'blue',
    padding:10,
  },
  airesponse:{
    width:300,
    height:20,
    backgroundColor:'#003b46',
    marginLeft:'50%',
    transform:[{translateX:-150}],
    marginTop:50,
  }
})
