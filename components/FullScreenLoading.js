import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default function FullScreenLoading() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </SafeAreaView>
  );
}
