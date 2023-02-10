import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import ModuleItem from "./ModuleItem";
import getAllModules from "../api/modules";

const ModuleList = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getAllModules().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <View style={styles.container}>
      {data.map((row, index) => (
        <ModuleItem key={index} module={data.index} />
      ))}
    </View>
  );
};
export default ModuleList;

const styles = StyleSheet.create({});
