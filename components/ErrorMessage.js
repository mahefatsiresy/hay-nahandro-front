import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Text } from "react-native-paper";

export default function ErrorMessage() {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: '100%'
      }}
    >
      <Icon source="emoticon-sad" size={40}/>
      <Text variant="headlineSmall"  style={{paddingTop: 16}}>Erreur de serveur</Text>
    </SafeAreaView>
  );
}
