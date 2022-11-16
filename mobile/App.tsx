import { NativeBaseProvider, StatusBar } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

// Components
import Loading from "./src/components/Loading";

// Routes
import { Routes } from "./src/routes";

// Screens
import SignIn from "./src/screens/SignIn";
import New from "./src/screens/New";
import Find from "./src/screens/Find";
import Pools from "./src/screens/Pools";

// Theme about application
import { THEME } from "./src/styles/theme";

// Context
import { AuthContextProvider } from "./src/contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
