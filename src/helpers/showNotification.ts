import { showMessage } from "react-native-flash-message";

export const showNotification = (message: string) => {
  showMessage({
    message,
    type: "danger",
    position: "top",
    titleStyle: { fontSize: 18, fontWeight: "600" },
  });
};
