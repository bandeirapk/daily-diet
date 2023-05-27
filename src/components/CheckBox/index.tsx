import React from 'react';

import { Container, IconItem, Title } from './styles';

type Props = {
  title: string;
  isActive?: boolean;
  size?: number;
};

export function CheckBox({ title, isActive, size, ...rest }: Props) {
  return (
    <Container
      isActive={isActive}
      size={size}
      {...rest}
    >
      <IconItem name="circle" />
      <Title>{title}</Title>
    </Container>
  );
}
