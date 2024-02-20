import AIRecipe from "../pages/AIRecipe";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import RecipeStack from "../navigations/RecipeStack";
import React from "react";
import { FAB } from "react-native-paper";
import { createNavigationContainerRef } from "@react-navigation/native";


// The navigationRef wiil be used to reference the 
// NavigationContainer
export const navigationRef = createNavigationContainerRef();

// navigate function for the FAB and other components
// that don't have access to the `navigation` prop
function navigate(name, params) {
  if (navigationRef.isReady()) {
    console.log("eto")
    navigationRef.navigate(name, params)
  }
}

const Tab = createMaterialBottomTabNavigator();

export default function RootNavigation({ navigation }) {
  return (
    <React.Fragment>
      <Tab.Navigator>
        <Tab.Screen
          name="Recipe"
          component={RecipeStack}
          options={{
            tabBarIcon: "bowl-outline",
            tabBarLabel: "Recettes",
          }}
        />
        <Tab.Screen
          name="AI"
          component={AIRecipe}
          options={{
            tabBarIcon: "robot-outline",
            tabBarLabel: "AI",
            title: "Recette avec IA",
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: "bell-outline",
            tabBarLabel: "Notifications",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: "account-outline",
            tabBarLabel: "Compte",
          }}
        />
      </Tab.Navigator>
      <FAB
        icon="plus"
        style={{
          position: "absolute",
          bottom: 100,
          right: 16,
        }}
        onPress={() => navigate("Recipe", { screen: "New" })}
      />
    </React.Fragment>
  );
}
