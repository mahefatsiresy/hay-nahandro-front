import { ScrollView } from "react-native";
import RecipeCard from "../components/RecipeCard";

export default function RecipeList() {
  return (
    <ScrollView style={{ flexGrow: 1, padding: 16 }}>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </ScrollView>
  );
}
