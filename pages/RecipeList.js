import { ScrollView } from "react-native";
import RecipeCard from "../components/RecipeCard";
import { useQuery } from "react-query";
import FullScreenLoading from "../components/FullScreenLoading";
import ErrorMessage from "../components/ErrorMessage";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RecipeList({ navigation }) {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://192.168.43.88:8000/recipes").then((res) => res.json()),
  );

  if (isLoading) return <FullScreenLoading />;

  if (error) return <ErrorMessage />;

  function handleNavigation() {
    navigation.navigate("Recipe", { screen: "Detail" });
  }

  return (
    <ScrollView style={{ paddingHorizontal: 12 }}>
      {data.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          description={recipe.description}
          source={recipe.images}
          onPress={handleNavigation}
        />
      ))}
    </ScrollView>
  );
}
