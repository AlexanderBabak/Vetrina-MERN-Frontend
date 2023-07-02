import { Center, Link, Text } from 'native-base';
import React from 'react';

type Props = {
  text: string;
  linkText?: string;
  onPress: () => void;
};

export const AuthNavigation: React.FC<Props> = ({
  text,
  linkText,
  onPress,
}) => {
  return (
    <Center>
      <Link
        isUnderlined={false}
        _text={{ color: 'primary.blue.main', fontSize: 18, lineHeight: 28 }}
        onPress={onPress}
      >
        <Text marginRight={1} fontSize={18} color="neutral.black.default">
          {text}
        </Text>
        {linkText && linkText}
      </Link>
    </Center>
  );
};
