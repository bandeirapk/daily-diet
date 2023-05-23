import React from 'react';

import { useTheme } from 'styled-components';

import {
  Container,
  OpenButton,
  OpenIcon,
  PercentTitle,
  SubTitle,
} from './styles';

export function HomePercentCard() {
  const theme = useTheme();

  return (
    <Container>
      <OpenButton>
        <OpenIcon />
      </OpenButton>

      <PercentTitle>90,86%</PercentTitle>

      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
