import { 
  useFonts, 
  SpaceGrotesk_300Light, 
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_700Bold
} from "@expo-google-fonts/space-grotesk";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({  
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_700Bold
  });
 
  return (
    <Routes />
  );
}