// import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import { Text, View } from "native-base";

// import Icon from "react-native-vector-icons/Ionicons";
// import { DashboardScreen } from "./DashboardScreen";
// import { LogoutScreen } from "./LogoutScreen";
// import { OrdersScreen } from "./OrdersScreen";
// import { PaymentScreen } from "./PaymentScreen";
// import { ProductsScreen } from "./ProductsScreen";
// import { SubscribtionScreen } from "./SubscribtionScreen";

// const Drawer = createDrawerNavigator();

export const MainScreen = () => {
  return (
    <View>
      <Text>Main</Text>
    </View>
    // <Drawer.Navigator
    //   screenOptions={{
    //     headerTitleStyle: {
    //       fontSize: 20,
    //       fontFamily: "SourceSansPro-SemiBold",
    //       lineHeight: 25,
    //       marginLeft: -15,
    //     },
    //     headerStyle: {
    //       borderBottomColor: "#0A254052",
    //       borderBottomWidth: 1,
    //     },
    //     drawerLabelStyle: {
    //       fontFamily: "NotoSans-Regular",
    //       lineHeight: 20,
    //     },
    //     drawerActiveTintColor: "#21B8F9",
    //     headerTintColor: "#103B66",
    //     drawerInactiveTintColor: "#103B66",
    //     drawerActiveBackgroundColor: "#E9F8FE",
    //   }}
    // >
    //   <Drawer.Screen
    //     name="Dashboard"
    //     component={DashboardScreen}
    //     options={{
    //       drawerIcon: ({ size, color }) => (
    //         <Icon name="home" size={size} color={color} />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Products"
    //     component={ProductsScreen}
    //     options={{
    //       drawerIcon: ({ size, color }) => (
    //         <Icon name="cart" size={size} color={color} />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Payment"
    //     component={PaymentScreen}
    //     options={{
    //       drawerIcon: ({ size, color }) => (
    //         <Icon name="logo-usd" size={size} color={color} />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Orders"
    //     component={OrdersScreen}
    //     options={{
    //       drawerIcon: ({ size, color }) => (
    //         <Icon name="list" size={size} color={color} />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Subscribtion"
    //     component={SubscribtionScreen}
    //     options={{
    //       drawerIcon: ({ size, color }) => (
    //         <Icon name="card" size={size} color={color} />
    //       ),
    //     }}
    //   />
    //   <Drawer.Screen
    //     name="Logout"
    //     component={LogoutScreen}
    //     options={{
    //       drawerIcon: ({ size, color }) => (
    //         <Icon name="log-out" size={size} color={color} />
    //       ),
    //     }}
    //   />
    // </Drawer.Navigator>
  );
};
