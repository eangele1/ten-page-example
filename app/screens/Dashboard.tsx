import React from "react";
import { StyleSheet, View, Text, FlatList, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface DashboardItem {
  id: string;
  title: string;
  value: string;
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const dashboardData: DashboardItem[] = [
    { id: "1", title: "Total Sales", value: "$12,345" },
    { id: "2", title: "New Users", value: "120" },
    { id: "3", title: "Pending Orders", value: "15" },
    { id: "4", title: "Support Tickets", value: "8" },
  ];

  const renderItem = ({ item }: { item: DashboardItem }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardValue}>{item.value}</Text>
    </View>
  );

  const handleOpenReports = () => {
    Alert.alert("Message", "Will open reports!");
  };

  const handleOpenUsers = () => {
    Alert.alert("Message", "Will open users!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Overview</Text>

      <FlatList
        data={dashboardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.dashboardList}
      />

      <View style={styles.actions}>
        <Button title="View Reports" onPress={handleOpenReports} />
        <Button title="Manage Users" onPress={handleOpenUsers} />
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
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  dashboardList: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
    color: "#333",
  },
  actions: {
    marginTop: 32,
  },
});

export default Dashboard;
