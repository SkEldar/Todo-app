import React,{useState} from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export default function AddTodo({onSubmit}) {
    const [value,setValue] = useState('')

  const pressHandler = () => {
      onSubmit(value)
      setValue('')
  }

  return (
    <View style={styles.add}>
      <TextInput style={styles.input}
       onChangeText={setValue}
       value = {value}
       placeholder = "Что надо сделать?"
      />
      <Button title="Добавить в список!" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  add: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom : 15,

  },
  input: {
    width: "57%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
