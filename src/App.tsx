import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";

import { theme } from "./assets/theme";

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <View style={styles.sectionContainer}>
        <Text>Hello</Text>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
