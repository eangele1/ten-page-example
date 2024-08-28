import React from "react";
import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile: React.FC = () => {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    Alert.alert("Message", "Will edit profile!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{ uri: "https://via.placeholder.com/150" }}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>johndoe@example.com</Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.sectionTitle}>Account Details</Text>
        <Text style={styles.detailItem}>Username: johndoe</Text>
        <Text style={styles.detailItem}>Joined: January 2023</Text>
        <Text style={styles.detailItem}>Location: New York, USA</Text>
      </View>

      <View style={styles.actions}>
        <Button title="Edit Profile" onPress={handleEditProfile} />
        <Button
          title="Settings"
          onPress={() => navigation.navigate("Settings" as never)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 32,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    fontSize: 16,
    color: "#666",
  },
  profileDetails: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  actions: {
    marginBottom: 16,
  },
});

export default Profile;
