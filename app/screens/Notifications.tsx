import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
  read: boolean;
}

const Notifications: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: "1",
      title: "New Feature Available!",
      description: "Check out the latest update with new features.",
      date: "2024-08-20",
      read: false,
    },
    {
      id: "2",
      title: "Maintenance Downtime",
      description: "Scheduled maintenance on August 25th, 2024.",
      date: "2024-08-18",
      read: true,
    },
    {
      id: "3",
      title: "Welcome to the App!",
      description: "Thank you for joining us! Explore the app to get started.",
      date: "2024-08-10",
      read: true,
    },
  ];

  const renderItem = ({ item }: { item: Notification }) => (
    <TouchableOpacity
      style={[styles.notificationItem, item.read && styles.readNotification]}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
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
  list: {
    flexGrow: 1,
  },
  notificationItem: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  readNotification: {
    backgroundColor: "#e0e0e0",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
});

export default Notifications;
