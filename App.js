import { PaperProvider, DefaultTheme, Portal, FAB } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation, {navigationRef} from "./components/RootNavigation";
import RecipeStack from "./navigations/RecipeStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const queryClient = new QueryClient();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        {/* NavigationContainer provides routing */}
        <NavigationContainer ref={navigationRef}>
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
