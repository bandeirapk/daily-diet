import React from 'react';

import { Button } from '@components/Button';

import personImg from '@assets/img/illustration.png';

import { Container, Title, Subtitle, ImageRepresentation } from './styles';
import { Text } from 'react-native';

export function Feedback() {
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtitle>Você continua da dieta. Muito bem!</Subtitle>

      <ImageRepresentation
        source={personImg}
        resizeMode="contain"
      />

      <Button />
    </Container>
  );
}
