import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RecipeList from "../pages/RecipeList";
import RecipeDetail from "../pages/RecipeDetail";
import NewRecipe from "../pages/NewRecipe";

const Stack = createNativeStackNavigator();

/*
 * The Recipe Stack is responsible for transitioning to
 * RecipeList to RecipeDetail
 */
export default function RecipeStack() {
  return (
    // Navigator: ensemble de Screen
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={RecipeList}
        options={{ headerTitle: "Les recettes" }}
      />
      <Stack.Screen name="Detail" component={RecipeDetail} />
      <Stack.Screen name="New" component={NewRecipe} />
    </Stack.Navigator>
  );
}
