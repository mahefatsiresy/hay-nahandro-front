import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import RecipeCard from './components/RecipeCard';
import RecipeList from './pages/RecipeList';
import Rapide from './pages/Rapide';
import NewRecipe from './pages/NewRecipe';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState("recettes");
  function handleClick(pageName) {
    setCurrentPage(pageName);
  }
  return (
    <View style={styles.container}>
      {'recettes' === currentPage && <RecipeList />}
      {'rapide' === currentPage && <Rapide />}
      {'poster' === currentPage && <NewRecipe />}
      {'notifications' === currentPage && <Notifications />}
      {'profile' === currentPage && <Profile />}
      {/* Navbar */}
      <View style={styles.navbar}>
        <Button title='Recettes' onPress={() => handleClick('recettes')} />
        <Button title='Rapide' onPress={() => handleClick('rapide')} />
        <Button title='Poster'  onPress={() => handleClick('poster')}/>
        <Button title='Notifications'  onPress={() => handleClick('notifications')}/>
        <Button title='Profile'  onPress={() => handleClick('profile')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: '100%'
  },
  listContainer: {
    flexGrow: 1,
    padding: 16
  },
  navbar: {
    height: 64,
    backgroundColor: 'red',
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 8,
    paddingVertical: 12
  },
});
