import React from 'react';

import { useTheme } from 'styled-components';

import { Container, BackButton, BackIcon, Title } from './styles';

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <BackButton>
        <BackIcon />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  );
}
