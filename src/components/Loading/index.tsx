import React from 'react';

import { Container, LoadIndicator, LoadText } from './styles';

export function Loading() {
  return (
    <Container>
      <LoadIndicator size={26} />
      <LoadText>Carregando...</LoadText>
    </Container>
  );
}
