import { Button, Card, Text } from "react-native-paper";

export default function RecipeCard({
  recipe,
  onPress,
}) {
  const {name, description, cover_image} = recipe
  return (
    <Card onPress={onPress} mode="elevated" style={{ marginBottom: 24 }}>
      {!cover_image ? (
        <Card.Cover source={require("../assets/icon.png")} />
      ) : (
        <Card.Cover source={{ uri: cover_image }} />
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
