import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Text } from "react-native-paper";
import React from "react";
import { Image, ScrollView, View } from "react-native";

export default function RecipeDetail({ route }) {
  const recipe = route.params.recipe;
  React.useEffect(() => {
    if (route.params.recipe) {
      // setRecipe(route.params.recipe);
    }
  }, [route.params?.post]);

  return (
    <SafeAreaView style={{ paddingHorizontal: 12 }}>
      <Image
        source={{ uri: recipe.cover_image }}
        style={{ width: "100%", height: 256, borderRadius: 12 }}
      />
      {0 !== recipe.images.length && (
        <ScrollView style={{ height: 96, marginTop: 16 }} horizontal={true}>
          {recipe.images.map((image) => (
            <Image
              key={image}
              source={{ uri: image }}
              style={{
                width: 128,
                height: 96,
                borderRadius: 12,
                marginRight: 16,
              }}
            />
          ))}
        </ScrollView>
      )}
      <Text variant="headlineMedium" style={{ marginTop: 16 }}>
        {recipe.name}
      </Text>
      <Text variant="bodyLarge" style={{ marginTop: 16, textAlign: "justify" }}>
        {recipe.description}
      </Text>
      <Text variant="headlineMedium" style={{ marginTop: 16 }}>
        Ingredients
      </Text>
      <View style={{ paddingHorizontal: 16 }}>
        {recipe.ingredients.map((ingredient) => (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon source='plus'/>
              <Text
                variant="bodyLarge"
                style={{
                  textAlign: "left",
                  width: "auto",
                  flexGrow: 1,
                  padding: 16,
                }}
              >
                {ingredient.name}
              </Text>
            </View>
            <Text
              variant="bodyLarge"
              style={{
                textAlign: "left",
                width: "auto",
                flexGrow: 1,
                padding: 16,
              }}
            >
              x{ingredient.quantity}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
