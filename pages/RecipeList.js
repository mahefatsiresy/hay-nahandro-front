import { ScrollView } from "react-native";
import RecipeCard from "../components/RecipeCard";
import { useQuery } from "react-query";
import FullScreenLoading from "../components/FullScreenLoading";
import ErrorMessage from "../components/ErrorMessage";

export default function RecipeList({ navigation }) {
  const { isLoading, error, data } = useQuery("repoData", () =>
    // samy manan ny azy rehefa midev
    fetch("http://192.168.88.17:8000/recipes").then((res) => res.json()),
  );

  if (isLoading) return <FullScreenLoading />;

  if (error) return <ErrorMessage />;

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
