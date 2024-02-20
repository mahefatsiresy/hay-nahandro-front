import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipeList from "./RecipeList";

const Stack = createNativeStackNavigator();

function AIRecipeInput({navigation}) {
  return (
    <SafeAreaView>
      <Button>Upload</Button>
      <Button>Camera</Button>
      <Button onPress={() => navigation.navigate('AI', {screen: 'Result'})}>Voir resultat</Button>
    </SafeAreaView>
  );
}

function AIRecipeResult() {
  return <RecipeList />;
}

export default function AIRecipe() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InputOption" component={AIRecipeInput} options={{headerTitle: "Recettes avec l'IA"}}/>
      <Stack.Screen name="Result" component={AIRecipeResult} />
    </Stack.Navigator>
  );
}
