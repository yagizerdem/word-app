import { useEffect, useState } from "react";
import { View, Text ,StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Loader from "../Components/Loader";

function selectRandomKeys(obj, numKeys) {
  const keys = Object.keys(obj);
  const selectedKeys = [];

  // Ensure numKeys is not greater than the number of keys in the object
  numKeys = Math.min(numKeys, keys.length);

  // Select random keys
  while (selectedKeys.length < numKeys) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    // Add the key if it's not already selected
    if (!selectedKeys.includes(randomKey)) {
      selectedKeys.push(randomKey);
    }
  }

  return selectedKeys;
}

export default function QuizScreen() {
  const [laodgin, setLoading] = useState(true);
  const [quetions, setQuestions] = useState();
  const [allq, setAllq] = useState(null);
  const [no, setNo] = useState(0);
  const [correctCount , setCorrectCount] = useState(0)

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const result = await require("../data/randomWordsdata.json");
      // suffle
      setAllq(result);
      setLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    if (allq == null) return;
    const keys = selectRandomKeys(allq, 5);
    var rnd = Math.floor(Math.random() * 5);
    const q = {
      question: allq[keys[rnd]],
      answers: {
        a: keys[0],
        b: keys[1],
        c: keys[2],
        d: keys[3],
        e: keys[4],
      },
      correctanswer: keys[rnd],
    };
    setQuestions(q);
  }, [allq, no]);

  function handelAnswer(answer){
    console.log(answer)
    if(answer == quetions.correctanswer){
      setCorrectCount(prev => prev + 1)
    }
    setNo(prev => prev + 1)
  }
  function restart(){
    setNo(0)
    setCorrectCount(0)
  }

  if(no == 10){
    return(
      <View style={styles.endcontainer}>
      <Text style={styles.text}>correct coutn {correctCount} / 10</Text>
      <TouchableOpacity style={styles.restart} onPress={restart}>
        <Text style={styles.text}>restart</Text>
      </TouchableOpacity>
    </View>
    )
  }
  if (laodgin) {
    return <Loader></Loader>;
  }
  return (
    <ScrollView style ={styles.card}>
      <Text style={styles.title}>{quetions.question}</Text>
      <TouchableOpacity style={styles.option} onPress={()=>handelAnswer(quetions.answers.a)}>
        <Text style={styles.text}>{quetions.answers.a}</Text>
      </TouchableOpacity >
      <TouchableOpacity style={styles.option} onPress={()=>handelAnswer(quetions.answers.b)}>
        <Text style={styles.text}>{quetions.answers.b}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>handelAnswer(quetions.answers.c)}>
        <Text style={styles.text}>{quetions.answers.c}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>handelAnswer(quetions.answers.d)}>
        <Text style={styles.text}>{quetions.answers.d}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>handelAnswer(quetions.answers.e)}>
        <Text style={styles.text}>{quetions.answers.e}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 450,
    marginLeft:'50%',
    transform:[{translateX:-125}],
    marginTop:10
 },
 title:{
    fontWeight:'bold',
    padding:10,
    fontSize:20,
    textAlign:'center'
 },
 option:{
    width:200,
    height:50,
    backgroundColor:'#8C92AC',
    borderRadius:20,
    margin:10,
    marginLeft:25,
    display:'flex',
    alignContent:'center',
    justifyContent:'center',

    elevation: 5, // Add elevation for shadow effect
    shadowColor: 'black', // Shadow color
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Shadow radius
    shadowOffset: {
      width: 0, // No shadow on x-axis
      height: 3, // Shadow height
    },
 },
 text:{
    textAlign:'center',
    fontWeight:'bold',
 },
 endcontainer:{
  width:200,
  height:200,
  elevation: 5, // Add elevation for shadow effect
  shadowColor: 'black', // Shadow color
  shadowOpacity: 0.3, // Shadow opacity
  shadowRadius: 5, // Shadow radius
  shadowOffset: {
    width: 0, // No shadow on x-axis
    height: 3, // Shadow height
  },
 marginLeft:'50%',
 transform:[{translateX:-100}],
 marginTop:100,
 display:'flex',
 alignItemss:'center',
 justifyContent:'center'
},
restart:{
  width:100,
  height:40,
  backgroundColor:'#fd5c63',
  marginLeft:'50%',
  transform:[{translateX:-50}],
  marginTop:40,
  display:'flex',
  alignItemss:'center',
  justifyContent:'center'
}
});
