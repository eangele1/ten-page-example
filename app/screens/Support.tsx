import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
  ScrollView,
  Alert,
} from "react-native";

const Support: React.FC = () => {
  const handleContactSupport = () => {
    // Example of opening an email client
    // Linking.openURL("mailto:support@example.com");

    Alert.alert(
      "Message",
      "Will send user to email app with support email address!"
    );
  };

  const handleOpenFAQ = () => {
    // Navigate to the FAQ screen
    Alert.alert("Message", "Will open FAQ page!");
  };

  const handleSubmitFeedback = () => {
    Alert.alert("Message", "Will take user to submit review!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        <Text style={styles.sectionDescription}>
          Find answers to the most common questions our users have.
        </Text>
        <Button title="View FAQ" onPress={handleOpenFAQ} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Support</Text>
        <Text style={styles.sectionDescription}>
          If you need further assistance, feel free to reach out to our support
          team.
        </Text>
        <Button title="Email Support" onPress={handleContactSupport} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Feedback</Text>
        <Text style={styles.sectionDescription}>
          We value your feedback. Let us know how we can improve your
          experience.
        </Text>
        <Button title="Submit Feedback" onPress={handleSubmitFeedback} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333",
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    color: "#555",
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 12,
    color: "#777",
  },
});

export default Support;
