import React from 'react';
import { HStack, Text, VStack } from 'native-base';
import { ButtonStyled } from '../components/UI/ButtonStyled';

type Props = {
  isYearly: boolean;
  title: string;
  yearlyPrice: string;
  monthlyPrice: string;
  description: boolean;
};

export const SubscriptionCard: React.FC<Props> = ({
  isYearly,
  title,
  yearlyPrice,
  monthlyPrice,
  description,
}) => {
  return (
    <HStack
      justifyContent="space-between"
      backgroundColor="#fff"
      paddingX={6}
      paddingY={4}
      borderRadius="10px"
      shadow={1}
    >
      <VStack justifyContent="space-between">
        <VStack>
          <Text
            fontFamily="body"
            fontSize={20}
            fontWeight={600}
            lineHeight={25}
            color="neutral.black.default"
          >
            {title}
          </Text>
          {description && (
            <Text
              fontFamily="body"
              fontSize={12}
              fontWeight={600}
              lineHeight={16}
              color="primary.green"
              marginTop={2}
            >
              2 mesi in regalo
            </Text>
          )}
        </VStack>

        <Text
          fontFamily="body"
          fontSize={17}
          fontWeight={600}
          lineHeight={22}
          color="neutral.black.default"
        >
          €{' '}
          <Text
            fontFamily="body"
            fontSize={28}
            fontWeight={600}
            lineHeight={32}
            color="primary.blue.main"
          >
            {isYearly ? yearlyPrice : monthlyPrice}
          </Text>
          {isYearly ? '/year' : '/month'}
        </Text>
      </VStack>
      <VStack>
        <Text
          marginBottom={8}
          fontFamily="body"
          fontSize={15}
          fontWeight={600}
          lineHeight={20}
          color="neutral.black.default"
        >
          Max 150 prodotti
        </Text>
        <ButtonStyled onPress={() => {}} fontSize={16}>
          Change plan
        </ButtonStyled>
      </VStack>
    </HStack>
  );
};
