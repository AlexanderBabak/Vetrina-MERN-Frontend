import React from "react";

import { Center, Heading } from "native-base";
// import Icon from 'react-native-vector-icons/Ionicons';

export const DashboardScreen = () => {
  return (
    <Center flex={1} backgroundColor="#fff">
      <Heading>DashboardScreen</Heading>
      <Center>{/* <Icon name="eye" size={30} color="black" /> */}</Center>
    </Center>
  );
};
