import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { useTheme } from 'styled-components';

import {
  Container,
  OpenButton,
  OpenIcon,
  PercentTitle,
  SubTitle,
} from './styles';

type Props = TouchableOpacityProps & {};

export function HomePercentCard({ ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <OpenButton>
        <OpenIcon />
      </OpenButton>

      <PercentTitle>90,86%</PercentTitle>

      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
