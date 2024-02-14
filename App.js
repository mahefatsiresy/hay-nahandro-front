import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import RecipeList from './pages/RecipeList';
import Rapide from './pages/Rapide';
import NewRecipe from './pages/NewRecipe';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import { PaperProvider, DefaultTheme, BottomNavigation, Text } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function App() {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'recipes', title: 'Recettes', focusedIcon: 'bowl-mix', unfocusedIcon: 'bowl-mix-outline' },
    { key: 'ai', title: 'AI', focusedIcon: 'robot', unfocusedIcon: 'robot-outline' },
    { key: 'new', title: 'Poster', focusedIcon: 'plus', unfocusedIcon: 'plus' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    recipes: RecipeList,
    ai: Rapide,
    new: NewRecipe,
    notifications: Notifications,
    profile: Profile
  })

  return (
    <PaperProvider>
        <StatusBar />
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
    </PaperProvider>
  );
}
