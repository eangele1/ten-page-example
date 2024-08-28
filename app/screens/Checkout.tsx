import React from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";

interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

const Checkout: React.FC = () => {
  const cartItems: CartItem[] = [
    { id: "1", name: "Product 1", price: "$29.99", quantity: 2 },
    { id: "2", name: "Product 2", price: "$49.99", quantity: 1 },
    // Add more items here...
  ];

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>
        {item.price} x {item.quantity}
      </Text>
    </View>
  );

  const handleCheckout = () => {
    // Handle the checkout process
    console.log("Checkout process initiated");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
        <Button title="Proceed to Checkout" onPress={handleCheckout} />
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
  list: {
    flexGrow: 1,
  },
  cartItem: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    color: "#555",
  },
  totalContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: "center",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
});

export default Checkout;
