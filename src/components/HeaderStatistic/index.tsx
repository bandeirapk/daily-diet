import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { useTheme } from 'styled-components';

import {
  Container,
  BackButton,
  BackIcon,
  PercentTitle,
  SubTitle,
} from './styles';

type Props = TouchableOpacityProps & {};

export function HeaderStatistic({ ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <BackButton {...rest}>
        <BackIcon />
      </BackButton>

      <PercentTitle>90,86%</PercentTitle>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
