import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

const Index: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = () => {
    if (isLogin) {
      setEmail("");
      setPassword("");
      email.length != 0 && router.replace("/screens/Home");
    } else {
      setEmail("");
      setPassword("");
      email.length != 0 && router.replace("/screens/Home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isLogin ? "Login" : "Signup"}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title={isLogin ? "Login" : "Signup"} onPress={handleSubmit} />

      <TouchableOpacity onPress={toggleForm}>
        <Text style={styles.toggleText}>
          {isLogin
            ? "Don’t have an account? Signup"
            : "Already have an account? Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#333",
  },
  input: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  toggleText: {
    marginTop: 16,
    textAlign: "center",
    color: "#007BFF",
  },
});

export default Index;
