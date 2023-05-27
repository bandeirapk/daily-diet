import React from 'react';

import { useTheme } from 'styled-components';

import {
  Container,
  BackButton,
  BackIcon,
  PercentTitle,
  SubTitle,
} from './styles';

export function HeaderStatistic() {
  const theme = useTheme();

  return (
    <Container>
      <BackButton>
        <BackIcon />
      </BackButton>

      <PercentTitle>90,86%</PercentTitle>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
