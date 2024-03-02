import { useEffect, useRef, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import Loader from "../Components/Loader";
import ErrorContainer from "../Components/ErrorContainer";
import Card from "../Components/Card";
import CardContainer from "../Components/CardContainer";

export default function DictionaryScreen() {
  const [query, setQuery] = useState();
  const [loading, setLoading] = useState();
  const [err, setErr] = useState(null);
  const [result , setResult] = useState(null)
  function handleQuery(text) {
    setQuery(text);
  }
  function executeQuery() {
    async function fetchWordData() {
      try {
        setLoading(true);
        setErr(null);
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
        );
        const data = await response.json();
        setResult(data)
      } catch (err) {
        setErr("error occured ... ");
      } finally {
        setLoading(false);
      }
    }
    fetchWordData();
  }
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          onChangeText={(e) => handleQuery(e)}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={executeQuery}>
          <Text style={styles.text}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wordcontainer}>
        {loading && !err && <Loader></Loader>}
        {err != null && <ErrorContainer msg={err}></ErrorContainer>}
        {!loading && err == null && <CardContainer data={result}></CardContainer>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 60,
    marginLeft: "50%",
    transform: [{ translateX: -150 }],
    marginTop: 30,
    direction: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  textinput: {
    width: 150,
    height: 50,
    backgroundColor: "#8c92ac",
    borderRadius: 4,
    color: "#fff",
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  wordcontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
