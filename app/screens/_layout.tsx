import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="Home" // MUST MATCH FILE NAME
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
          }}
        />
        <Drawer.Screen
          name="Dashboard"
          options={{
            drawerLabel: "Dashboard",
            title: "Dashboard",
          }}
        />
        <Drawer.Screen
          name="Products"
          options={{
            drawerLabel: "Products",
            title: "Products",
          }}
        />
        <Drawer.Screen
          name="Notifications"
          options={{
            drawerLabel: "Notifications",
            title: "Notifications",
          }}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
          }}
        />
        <Drawer.Screen
          name="Support"
          options={{
            drawerLabel: "Support",
            title: "Support",
          }}
        />
        <Drawer.Screen
          name="Checkout"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen
          name="ProductDetail"
          options={{
            drawerItemStyle: { display: "none" },
            title: "",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
