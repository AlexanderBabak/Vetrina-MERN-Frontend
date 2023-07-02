import { Pressable, Text, View } from 'native-base';
import React from 'react';

type Props = {
  children: string;
  onPress: () => void;
  fontSize: number;
  maxWidth?: string;
};

export const ButtonStyled: React.FC<Props> = ({
  children,
  onPress,
  maxWidth,
  fontSize,
}) => {
  return (
    <View maxWidth={maxWidth}>
      <Pressable onPress={onPress}>
        {({ isPressed }) => (
          <View
            padding={'15px'}
            shadow={1}
            backgroundColor={
              isPressed ? 'primary.blue.700' : 'primary.blue.main'
            }
            borderRadius={5}
          >
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
          </View>
        )}
      </Pressable>
    </View>
  );
};
