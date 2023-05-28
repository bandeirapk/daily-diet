import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  size?: number;
};

export function Button({ title, size, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      size={size}
      {...rest}
    >
      <Title> {title} </Title>
    </Container>
  );
}
