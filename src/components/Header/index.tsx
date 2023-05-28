import React from 'react';

import { useTheme } from 'styled-components';

import { Container, BackButton, BackIcon, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Header({ title, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <BackButton {...rest}>
        <BackIcon />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  );
}
