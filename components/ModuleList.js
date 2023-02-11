import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import ModuleItem from "./ModuleItem";
import getAllModules from "../api/modules";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ModuleList = () => {
  const [data, setData] = useState({});
  const [isShown, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const year = ["1A", "2A", "3A"];

  useEffect(() => {
    setLoading(true);
    setError(null);
    getAllModules()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const filteredData = () => {
    if (year.includes(filterText)) {
      return data.filter(function (module) {
        console.log("Je suis dans la validance");
        return module.year == filterText;
      });
    } else {
      return data;
    }
  };

  const toggleIsShown = () => {
    setShow(!isShown);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>An error occurred: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={toggleIsShown}
          style={styles.buttonContainer}
        >
          {isShown ? <Text>Show</Text> : <Text>Hide</Text>}
        </TouchableOpacity>
        <TextInput
          style={styles.buttonContainer2}
          value={filterText}
          onChangeText={(text) => setFilterText(text)}
          placeholder="Year filter"
        ></TextInput>
      </View>
      {!isShown && (
        <ScrollView>
          {filteredData().map((module, index) => (
            <ModuleItem key={index} module={module} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
export default ModuleList;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  buttonContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    color: "black",
    backgroundColor: "paleturquoise",
    width: width * 0.8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonContainer2: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    color: "black",
    backgroundColor: "#B0F2B6",
    width: width * 0.8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    textAlign: "center",
  },
});
