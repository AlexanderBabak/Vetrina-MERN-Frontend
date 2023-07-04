import React from "react";

import { Pressable, Spinner, Text, View } from "native-base";

type Props = {
  children: string;
  onPress: () => void;
  fontSize: number;
  maxWidth?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
};

const ButtonStyled: React.FC<Props> = ({
  children,
  onPress,
  maxWidth,
  fontSize,
  isDisabled = false,
  isLoading = false,
}) => {
  return (
    <View maxWidth={maxWidth}>
      <Pressable onPress={onPress} disabled={isDisabled}>
        {({ isPressed }) => (
          <View
            padding={"15px"}
            shadow={1}
            backgroundColor={
              isDisabled
                ? "gray.400"
                : isPressed
                ? "primary.blue.700"
                : "primary.blue.main"
            }
            borderRadius={5}
          >
            {isLoading ? (
              <Spinner color="white" size="sm" />
            ) : (
              <Text
                textAlign="center"
                color="neutral.white"
                fontFamily="body"
                fontWeight={600}
                fontSize={fontSize}
                lineHeight={20}
              >
                {children}
              </Text>
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default ButtonStyled;
