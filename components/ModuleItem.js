import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ModuleItem = ({ module }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{module.name}</Text>
        <Text style={styles.title2}>{module.year}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: module.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{module.description}</Text>
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
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 20,
    color: "red",
    marginLeft: 10,
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
    fontSize: 14,
    fontStyle: "italic",
  },
});
