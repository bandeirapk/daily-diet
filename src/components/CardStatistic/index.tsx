import React from 'react';

import { Container, Title, Subtitle } from './styles';

type Props = {
  title: string;
  subtitle: string;
  color?: string;
  size?: number;
};

export function CardStatistic({ title, subtitle, color, size }: Props) {
  return (
    <Container
      size={size}
      color={color}
    >
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
