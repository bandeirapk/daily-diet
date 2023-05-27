import React from 'react';

import { View, SectionList, Text } from 'react-native';

import { HeaderHome } from '@components/HeaderHome';
import { HomePercentCard } from '@components/HomePercentCard';
import { ButtonIcon } from '@components/ButtonIcon';
import { MealCard } from '@components/MealCard';

import { Container, TextMeal } from './styles';

type ProductTypeProps = {
  id: string;
  name: string;
  description: string;
  date: string;
};

type Props = {
  titleTime: string;
  data: ProductTypeProps[];
};

export function Home() {
  const sections = [
    {
      titleTime: '12.08.22',
      data: [
        {
          id: '1',
          name: 'Whey protein com leite',
          description: 'Whey protein com leite',
          date: '20:00',
        },
        {
          id: '2',
          name: 'Whey protein com leite',
          description: 'Whey protein com leite',
          date: '20:00',
        },
        {
          id: '3',
          name: 'Salada cesar com frango grelhado',
          description: 'Salada cesar com frango grelhado',
          date: '20:00',
        },
        {
          id: '4',
          name: 'Vitamina de banana com abacate',
          description: 'Vitamina de banana com abacate',
          date: '20:00',
        },
      ],
    },
    {
      titleTime: '11.08.22',
      data: [
        {
          id: '5',
          name: 'Whey protein com leite',
          description: 'Whey protein com leite',
          date: '20:00',
        },
        {
          id: '6',
          name: 'Whey protein com leite',
          description: 'Whey protein com leite',
          date: '20:00',
        },
        {
          id: '7',
          name: 'Salada cesar com frango grelhado',
          description: 'Salada cesar com frango grelhado',
          date: '20:00',
        },
        {
          id: '8',
          name: 'Vitamina de banana com abacate',
          description: 'Vitamina de banana com abacate',
          date: '20:00',
        },
      ],
    },
  ] as Props[];

  return (
    <Container>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MealCard />}
        ListHeaderComponent={() => (
          <View>
            <HeaderHome />

            <HomePercentCard />

            <TextMeal>Refeições</TextMeal>
            <ButtonIcon />
          </View>
        )}
        renderSectionHeader={({ section: { titleTime } }) => (
          <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 32 }}>
            {titleTime}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }]}
        scrollEnabled={false}
      />
    </Container>
  );
}
