import React from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Center, Heading, Text } from "native-base";

import { RootParamList } from "../../types/navigationInterfaces";

type Props = {
  navigation: NativeStackNavigationProp<RootParamList>;
};

export const SupportScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Center flex={1}>
      <Heading>Support</Heading>
      <Text marginBottom={2}>I dont know how can I help you. </Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </Center>
  );
};
