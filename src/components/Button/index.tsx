import React from 'react';

import { Container, IconButton, Title } from './styles';

type Props = {
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
