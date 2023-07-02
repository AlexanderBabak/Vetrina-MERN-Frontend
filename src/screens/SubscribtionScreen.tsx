import React, { useState } from 'react';
import {
  Center,
  HStack,
  Text,
  Switch,
  VStack,
  ScrollView,
  View,
} from 'native-base';
import { SubscriptionCard } from '../components/SubscriptionCard';

const plans = [
  {
    id: '011',
    title: 'Free',
    yearlyPrice: '0.00',
    monthlyPrice: '0.00',
    description: false,
  },
  {
    id: '022',
    title: 'Vetrina',
    yearlyPrice: '109.00',
    monthlyPrice: '10.00',
    description: true,
  },
  {
    id: '033',
    title: 'Negozio',
    yearlyPrice: '209.00',
    monthlyPrice: '20.00',
    description: true,
  },
  {
    id: '044',
    title: 'Vetrina',
    yearlyPrice: '399.00',
    monthlyPrice: '30.00',
    description: true,
  },
];

export const SubscribtionScreen = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <View paddingTop={8} paddingX={4} backgroundColor="#E5E5E5" flex={1}>
      <VStack space={3} marginBottom={10}>
        <Text
          textAlign="center"
          fontFamily="body"
          fontSize={22}
          fontWeight={600}
          lineHeight={27}
          color="neutral.black.default"
        >
          Choose your plan
        </Text>
        <Center>
          <HStack alignItems="center">
            <Text
              marginRight="15px"
              fontFamily="body"
              fontSize={17}
              fontWeight={600}
              lineHeight={22}
              color={!isYearly ? 'neutral.black.default' : '#7D8A99'}
            >
              Monthly
            </Text>
            <Switch
              offTrackColor="primary.blue.main"
              onTrackColor="primary.blue.main"
              size={'lg'}
              isChecked={isYearly}
              onToggle={() => {
                setIsYearly(prev => !prev);
              }}
            />

            <Text
              marginLeft="15px"
              fontFamily="body"
              fontSize={17}
              fontWeight={600}
              lineHeight={22}
              color={isYearly ? 'neutral.black.default' : '#7D8A99'}
            >
              Yearly
            </Text>
            <View
              position="absolute"
              right="-70px"
              paddingY="4px"
              paddingX="10px"
              borderRadius={5}
              backgroundColor="primary.green"
            >
              <Text
                fontFamily="body"
                fontSize={12}
                fontWeight={600}
                lineHeight={16}
                color="neutral.white"
              >
                Promo
              </Text>
            </View>
          </HStack>
        </Center>
      </VStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        {plans.map(plan => (
          <View key={plan.id} marginBottom={4}>
            <SubscriptionCard
              isYearly={isYearly}
              title={plan.title}
              yearlyPrice={plan.yearlyPrice}
              monthlyPrice={plan.monthlyPrice}
              description={plan.description}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
