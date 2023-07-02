import { Center, Pressable, Text, View } from 'native-base';
import React from 'react';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import GoogleIcon from '../../assets/icons/GoogleIcon';

type Props = {
  children: string;
  onPress: () => void;
  icon: 'facebook' | 'google';
};

export const ButtonStyledOutlined: React.FC<Props> = ({
  children,
  onPress,
  icon,
}) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        {({ isPressed }) => (
          <Center
            flexDirection={'row'}
            padding={'12px'}
            borderWidth={1}
            borderColor="primary.blue.main"
            backgroundColor={isPressed ? 'primary.blue.700' : 'transparent'}
            borderRadius={5}
          >
            {icon === 'facebook' ? <FacebookIcon /> : <GoogleIcon />}
            <Text
              marginLeft="22px"
              textAlign="center"
              color="neutral.black.default"
              fontFamily="body"
              fontWeight={600}
              fontSize={14}
              lineHeight={20}
            >
              {children}
            </Text>
          </Center>
        )}
      </Pressable>
    </View>
  );
};
