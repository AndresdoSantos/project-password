import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Form } from "../screens/Form";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator 
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FFF" } }}
    >
      <Screen 
        name="home" 
        component={Home} 
        options={{ animation: "slide_from_bottom" }} 
      />
      <Screen 
        name="form" 
        component={Form} 
        options={{ animation: "fade_from_bottom" }} 
      />
    </Navigator>
  )
}