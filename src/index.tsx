import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./screens/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Minhas listas">
        <Stack.Screen name="Minhas listas" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
