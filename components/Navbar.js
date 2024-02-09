import { Button, View, StyleSheet } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Button title='Recettes' />
      <Button title='Rapide' />
      <Button title='Poster' />
      <Button title='Notifications' />
      <Button title='Profile' />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 64,
    backgroundColor: 'red',
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 8,
    paddingVertical: 12
  },
});
