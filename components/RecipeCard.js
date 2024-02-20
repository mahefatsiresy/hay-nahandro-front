import { Button, Card, Text } from "react-native-paper";

export default function RecipeCard({
  name = "Nom de l'ingredient",
  description = "Description",
  source = "",
  onPress,
}) {
  return (
    <Card onPress={onPress} mode="elevated" style={{ marginBottom: 24 }}>
      {!source ? (
        <Card.Cover source={require("../assets/icon.png")} />
      ) : (
        <Card.Cover source={{ uri: source }} />
      )}

      <Card.Title title={name} titleVariant="headlineSmall" />
      <Card.Content>
        <Text variant="bodyLarge">{description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button icon="heart">Liker</Button>
        <Button icon="comment">Commenter</Button>
        <Button icon="share">Partager</Button>
      </Card.Actions>
    </Card>
  );
}
