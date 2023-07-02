import React from 'react';
import { Text, Center, Image } from 'native-base';

type Props = {
  title: string;
  subtitle: string;
};

export const AuthHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Center>
      <Image
        source={require('../assets/vetrina-logo.png')}
        alt="logo"
        marginTop={8}
      />
      <Center marginTop={8} paddingX={'16px'}>
        <Text
          marginBottom={'8px'}
          fontSize={28}
          fontWeight={500}
          lineHeight={32}
          fontFamily="heading"
          color="neutral.black.default"
        >
          {title}
        </Text>
        <Text
          textAlign="center"
          fontSize={18}
          fontWeight={400}
          lineHeight={24}
          fontFamily="heading"
          color="neutral.black.700"
        >
          {subtitle}
        </Text>
      </Center>
    </Center>
  );
};
