import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import AuthForm from "./components/AuthForm";
import ModuleList from "./components/ModuleList";

export default function App() {
  const [isVerified, setVerification] = useState(false);

  const setverif = (verif) => {
    setVerification(verif);
  };
  return !isVerified ? <AuthForm verification={setverif} /> : <ModuleList />;
}

const styles = StyleSheet.create({});
