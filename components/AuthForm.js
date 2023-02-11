import React, { useState, Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import InputComponent from "./Input";
import authenticateUser from "../api/authentication";

const AuthForm = ({ verification }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const passwordSet = (password) => {
    setPassword(password);
  };
  const mailSet = (mail) => {
    setMail(mail);
  };

  const authenticate = () => {
    let user = authenticateUser(mail, password);
    if (user) {
      verification(true);
      Alert.alert(
        "Action sélectionnée",
        `Connexion de ${user.nickName} réussie`,
        [{ text: "OK" }]
      );
    } else {
      Alert.alert("Action sélectionnée", `L'utilisateur n'existe pas`, [
        { text: "OK" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/koala.png")} />
      <InputComponent
        source={require("../assets/apple-mail.png")}
        placeholder="Email"
        inputS={mailSet}
      />
      <InputComponent
        source={require("../assets/key.png")}
        placeholder="Mot de passe"
        inputS={passwordSet}
      />
      <TouchableOpacity onPress={authenticate} style={styles.buttonContainer}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
      <Button
        onPress={() =>
          Alert.alert("Action sélectionnée", `Mise à jour du mot de passe`, [
            { text: "OK" },
          ])
        }
        buttonStyle={styles.button2}
        title="Mot de passe oublié ?"
      />
      <Button
        onPress={() =>
          Alert.alert("Action sélectionnée", `Inscription réussie`, [
            { text: "OK" },
          ])
        }
        buttonStyle={styles.button2}
        title="S'inscrire"
      />
    </View>
  );
};
export default AuthForm;

const styles = StyleSheet.create({
  container: { marginTop: 150, alignItems: "center" },
  buttonContainer: {
    marginTop: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    color: "white",
    backgroundColor: "paleturquoise",
    width: 200,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  button2: {},
  logo: { height: 150, width: 150, marginBottom: 20 },
});
