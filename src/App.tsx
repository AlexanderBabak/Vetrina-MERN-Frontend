import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.sectionContainer}>
      <Text>Hello</Text>
    </View>
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
