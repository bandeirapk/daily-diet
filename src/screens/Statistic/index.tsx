import React from 'react';

import { useTheme } from 'styled-components/native';

import { HeaderStatistic } from '@components/HeaderStatistic';
import { CardStatistic } from '@components/CardStatistic';

import { Container, Content, Title, MealsInDiet } from './styles';

export function Statistic() {
  const theme = useTheme();

  return (
    <Container>
      <HeaderStatistic ShowStatic={true} />

      <Content>
        <Title>Estatística gerais</Title>

        <CardStatistic
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
          color={theme.COLORS.BASE.gray_600}
        />

        <CardStatistic
          title="109"
          subtitle="refeições registradas"
          color={theme.COLORS.BASE.gray_600}
        />

        <MealsInDiet>
          <CardStatistic
            title="99"
            subtitle="refeições dentro da dieta"
            color={theme.COLORS.PRODUCT.green_light}
            size={48}
          />

          <CardStatistic
            title="10"
            subtitle="refeições fora da dieta"
            color={theme.COLORS.PRODUCT.red_light}
            size={48}
          />
        </MealsInDiet>
      </Content>
    </Container>
  );
}
