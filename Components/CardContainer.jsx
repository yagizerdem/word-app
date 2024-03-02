import { View, Text, StyleSheet, FlatList ,Image, TouchableOpacity } from "react-native";
import Card from "./Card";
import Voice from "./Voice";
import SaveIcon from "./SaveIcon";



export default function CardContainer({ data }) {
  if (data == null) return <Text>search word ...</Text>;
  const word = data[0]?.word;
  const pronounce = data[0]?.phonetics[1]?.text;
  const partOfSpeech= data[0]?.meanings[0]?.partOfSpeech
  const definition = data[0]?.meanings[0]?.definitions[0].definition



  return (
    <>
      <View style={styles.container}>
        <Card
          title="word"
          content={<Text style={styles.word}>{word}</Text>}
          extraStyles={{ paddingBottom: 40 }}
          icon={
            <SaveIcon word={word} definition={definition}></SaveIcon>
          }
        ></Card>
      </View>
      <View style={styles.container}>
        <Card
          title="pronounce"
          content={<Text style={styles.word}>{pronounce}</Text>}
          extraStyles={{ paddingBottom: 40 }}
          icon={
            <Voice></Voice>
          }
        ></Card>

      </View>
      <View style={styles.container}>
        <Card
          title={partOfSpeech}
          content={<Text style={styles.word}>{definition}</Text>}
          extraStyles={{ paddingBottom: 40 }}
        ></Card>

      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  word: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 30,
  }
});
