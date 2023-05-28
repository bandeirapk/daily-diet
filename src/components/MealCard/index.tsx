import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, MealHour, MealTitle, IconItem } from './styles';

type Props = TouchableOpacityProps & {};

export function MealCard({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <MealHour>20:00</MealHour>
      <MealTitle>Whey protein com leite</MealTitle>
      <IconItem name="circle" />
    </Container>
  );
}
