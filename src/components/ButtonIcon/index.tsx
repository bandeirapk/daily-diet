import React from 'react';

import { Container, IconButton, Title } from './styles';

export function ButtonIcon() {
  return (
    <Container activeOpacity={0.7}>
      <IconButton />

      <Title> Nova refeição </Title>
    </Container>
  );
}
