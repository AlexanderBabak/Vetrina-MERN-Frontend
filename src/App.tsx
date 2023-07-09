import React from "react";

import { NativeBaseProvider } from "native-base";
import FlashMessage from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { theme } from "./assets/theme";
import { Navigation } from "./navigation/Navigation";
import { store } from "./redux/store";

function App() {
  //to remove the server rendering related warning, you need to update the native base version or fix the code for this library

  //Instead of ignoring the error, you can resolve it by yourself. Here's how:
  // Navigate to node_modules/native-base/src/core/NativeBaseProvider.tsx
  // Delete <SSRProvider></SSRProvider> that wraps {children}. Take care not to delete {children}.
  // Remove SSRProvider import. That is, delete this line import { SSRProvider } from '@react-native-aria/utils';
  // Run npx patch-package native-base. Select yes in the prompt.
  // When Native Base officially fixes it, you can delete the patch from the patch directory that was created and reinstall native-base
  // https://github.com/GeekyAnts/NativeBase/issues/5758#issuecomment-1627636324

  return (
    <>
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <Provider store={store}>
          <NativeBaseProvider theme={theme}>
            <Navigation />
          </NativeBaseProvider>
        </Provider>
      </SafeAreaView>
      <FlashMessage position="bottom" />
    </>
  );
}

export default App;
