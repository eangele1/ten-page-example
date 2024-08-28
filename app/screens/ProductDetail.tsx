import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
}

const ProductDetail: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { productId } = route.params as { productId: string };

  const product: Product = {
    id: productId,
    name: "Product 1",
    price: "$29.99",
    imageUrl: "https://example.com/product1.jpg",
    description: "This is a detailed description of Product 1.",
  };

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    navigation.navigate("Checkout" as never);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  price: {
    fontSize: 20,
    color: "#555",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#777",
    marginBottom: 24,
  },
});

export default ProductDetail;
