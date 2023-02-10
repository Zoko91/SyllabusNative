import React from "react";
import { View, Image, TextInput, StyleSheet, Text } from "react-native";

const ModuleItem = ({ module }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{module["Name"]}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: module["imageUrl"] }} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{module["description"]}</Text>
      </View>
    </View>
  );
};
export default ModuleItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  descriptionContainer: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 16,
  },
});
