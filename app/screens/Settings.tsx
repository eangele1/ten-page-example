import React, { useState } from "react";
import { StyleSheet, View, Text, Switch, Button, Alert } from "react-native";
import { router } from "expo-router";

const Settings: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () =>
    setNotificationsEnabled((previousState) => !previousState);

  const toggleDarkMode = () =>
    setDarkModeEnabled((previousState) => !previousState);

  const handleEditProfile = () => {
    Alert.alert("Message", "Will edit profile!");
  };

  const handleChangePassword = () => {
    Alert.alert("Message", "Will change password!");
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => router.replace("/") },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.actions}>
        <Button title="Edit Profile" onPress={handleEditProfile} />
        <Button title="Change Password" onPress={handleChangePassword} />
        <Button title="Logout" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 18,
    color: "#333",
  },
  actions: {
    marginTop: 32,
  },
});

export default Settings;
