import React from 'react';

import { Button } from '@components/Button';

import positivePersonImg from '@assets/img/positiveFeedback.png';
import negativePersonImg from '@assets/img/negativeFeedback.png';

import { Container, Title, Subtitle, ImageRepresentation } from './styles';

export function Feedback() {
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtitle>Você continua da dieta. Muito bem!</Subtitle>

      <ImageRepresentation source={negativePersonImg} />

      <Button
        title="Ir para a página inicial"
        size={50}
      />
    </Container>
  );
}
