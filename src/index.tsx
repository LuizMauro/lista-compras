import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./screens/home";
import Lists from "./screens/lists";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          options={{ title: "Minhas listas" }}
          component={Home}
        />
        <Stack.Screen
          name="lists"
          options={{ title: "LISTA" }}
          component={Lists}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
