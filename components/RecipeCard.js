import { View, Image, Text, Button } from 'react-native';

export default function RecipeCard() {
  return (
    <View style={{ width: '100%', marginBottom: 24 }}>
      <Image
        source={require('../assets/icon.png')}
        style={{ height: 256, width: '100%' }}
      />
      <Text style={{ fontWeight: '600', fontSize: 24, marginTop: 16, marginBottom: 12 }}>Nom de l'ingredient</Text>
      <Text style={{ fontSize: 17, lineHeight: 18 }}>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem </Text>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
        <Button title='Like'/>
        <Button title='Comment'/>
        <Button title='Share'/>
      </View>
    </View>
  );
}
