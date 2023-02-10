import React from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";

const InputComponent = ({ source, placeholder, inputS }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
      <Image
        source={source}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
      <TextInput
        placeholder={placeholder}
        style={{ fontSize: 20 }}
        onChangeText={inputS}
      />
    </View>
  );
};
export default InputComponent;

const styles = StyleSheet.create({});
