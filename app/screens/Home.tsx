import React from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Index: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to MyApp</Text>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Content</Text>
        {/* Add featured content here */}
        <Text>Featured Item 1</Text>
        <Text>Featured Item 2</Text>
      </View>

      <View style={styles.navigationSection}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile" as never)}
        />
        <Button
          title="Go to Dashboard"
          onPress={() => navigation.navigate("Dashboard" as never)}
        />
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Settings" as never)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  featuredSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  navigationSection: {
    marginBottom: 16,
  },
});

export default Index;
