import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AlertDialog, Button, Center } from "native-base";
import React, { useEffect, useRef, useState } from "react";

import { RootParamList } from "../interfaces/navigationInterfaces";
import { useAppDispatch } from "../redux/reduxType";
import { signOut } from "../redux/slices/authSlice";

type Props = {
  navigation: NativeStackNavigationProp<RootParamList>;
};

export const LogoutScreen: React.FC<Props> = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    navigation.goBack();
  };

  const cancelRef = useRef(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header borderBottomWidth={0}>Logout</AlertDialog.Header>
          <AlertDialog.Body>Are you shure to logout?</AlertDialog.Body>
          <AlertDialog.Footer borderTopWidth={0}>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={() => dispatch(signOut())}>
                Logout
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};
