import React from 'react';

import { Container, MealHour, MealTitle, IconItem } from './styles';

export function MealCard() {
  return (
    <Container>
      <MealHour>20:00</MealHour>
      <MealTitle>Whey protein com leite</MealTitle>
      <IconItem name="circle" />
    </Container>
  );
}
