import { Button, Card, Text } from 'react-native-paper';

export default function RecipeCard() {
  return (
    <Card
      mode='elevated'
      style={{ marginBottom: 24 }}>
      <Card.Cover source={require('../assets/icon.png')} />
      <Card.Title title="Nom de l'ingredient" titleVariant='headlineSmall'/>
      <Card.Content>
        <Text variant='bodyLarge'>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem </Text>
      </Card.Content>
      <Card.Actions>
        <Button icon="share">Partager</Button>
        <Button icon="comment">Commenter</Button>
        <Button icon="heart">Liker</Button>
      </Card.Actions>
    </Card >
  );
}
