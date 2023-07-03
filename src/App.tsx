import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { theme } from "./assets/theme";
import { Navigation } from "./navigation/Navigation";
import { store } from "./redux/store";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <Navigation />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
