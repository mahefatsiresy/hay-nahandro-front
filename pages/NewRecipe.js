import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { TextInput, Text, Button, Icon } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";
import { useMutation } from "react-query";
import { postRecipe } from "../apis/recipe.api";
import { queryClient } from "../App";

export default function NewRecipe({ navigation }) {
  const [recipe, setRecipe] = React.useState({
    name: "",
    description: "",
    cover_image: "",
    ingredients: [],
    images: [],
  });
  const [file, setFile] = React.useState(null);

  // mutate query with queryKey `recipe` after sucess post
  const mutation = useMutation({
    mutationFn: async () => {
      // upload the image then update the recipe
      const filePath = await uploadImage(file);
      setRecipe({
        ...recipe,
        cover_image: filePath,
      });

      await postRecipe(recipe);
      navigation.navigate("Recipe", { screen: "List" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
    },
  });

  // pick the image from the device
  async function pickImage() {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/*",
        multiple: false,
      });
      let { name, size, uri } = result.assets[0];
      const nameParts = name.split(".");
      const fileType = nameParts[nameParts.length - 1];
      const fileToUpload = {
        name: name,
        size: size,
        uri: uri,
        type: "application/" + fileType,
      };
      setFile(fileToUpload);
      setRecipe({ ...recipe, cover_image: result.assets[0].uri });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={{ padding: 16, height: "100%" }}>
      <Text variant="headlineLarge" style={{ marginBottom: 24 }}>
        Publier une nouvelle recette
      </Text>
      <ScrollView>
        <TouchableOpacity
          onPress={pickImage}
          style={{
            marginBottom: 16,
          }}
        >
          <View
            style={{
              width: "100%",
              height: recipe.cover_image ? 256 : 96,
              borderColor: "#888",
              borderWidth: 1,
              borderStyle: "dashed",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!recipe.cover_image ? (
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "column",
                  width: "auto",
                }}
              >
                <Icon source="image" size={24} />
                <Text variant="bodyLarge">Image de couverture</Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  source={{ uri: recipe.cover_image }}
                  height={256}
                  width={512}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
        <TextInput
          label="Nom de la recette"
          value={recipe.name}
          onChangeText={(text) => setRecipe({ ...recipe, name: text })}
          style={{
            marginBottom: 16,
          }}
          mode="outlined"
        />
        <TextInput
          label="Description"
          value={recipe.description}
          onChangeText={(text) => setRecipe({ ...recipe, description: text })}
          style={{
            marginBottom: 16,
          }}
          mode="outlined"
          multiline
          numberOfLines={5}
        />
      </ScrollView>
      <Button onPress={mutation.mutateAsync} mode="contained">
        Publier
      </Button>
    </SafeAreaView>
  );
}
