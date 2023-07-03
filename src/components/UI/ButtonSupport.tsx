import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Center, Pressable, Text, View } from "native-base";
import React from "react";

import HeadphonesIcon from "../../assets/icons/HeadphonesIcon";
import { OnboardingStackParamList } from "../../interfaces/navigationInterfaces";

const ButtonSupport = () => {
  const navigation: NativeStackNavigationProp<OnboardingStackParamList> =
    useNavigation();
  return (
    <View maxWidth={"128px"}>
      <Pressable
        onPress={() => {
          navigation.navigate("SupportScreen");
        }}
      >
        {({ isPressed }) => (
          <Center
            flexDirection={"row"}
            paddingY={"15px"}
            paddingX={"24px"}
            borderWidth={1}
            borderColor="primary.green"
            backgroundColor={isPressed ? "primary.green" : "transparent"}
            borderRadius={"30px"}
          >
            <HeadphonesIcon />
            <Text
              marginLeft="12px"
              textAlign="center"
              color="neutral.black.default"
              fontFamily="body"
              fontWeight={600}
              fontSize={14}
              lineHeight={20}
            >
              Support
            </Text>
          </Center>
        )}
      </Pressable>
    </View>
  );
};

export default ButtonSupport;
