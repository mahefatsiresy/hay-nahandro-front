import { ScrollView } from "react-native";
import RecipeCard from "../components/RecipeCard";
import { useQuery } from "react-query";
import FullScreenLoading from "../components/FullScreenLoading";
import ErrorMessage from "../components/ErrorMessage";
import { getRecipes } from "../apis/recipe.api";

export default function RecipeList({ navigation }) {
  const { isLoading, error, data } = useQuery({
    queryKey: "recipes",
    queryFn: getRecipes,
  });

  if (isLoading) return <FullScreenLoading />;

  if (error) return <ErrorMessage />;

  // Go to detail page when a RecipeCard is clicked and pass the recipe
  // as params
  function handleNavigation(recipe) {
    navigation.navigate("Recipe", { screen: "Detail", params: { recipe } });
  }

  return (
    <ScrollView style={{ paddingHorizontal: 12, marginTop: 12 }}>
      {data.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onPress={() => handleNavigation(recipe)}
        />
      ))}
    </ScrollView>
  );
}
