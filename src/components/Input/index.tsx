import React from 'react';

import { TextInputProps } from 'react-native';

import { Container, Title, InputText } from './styles';

type Props = TextInputProps & {
  title: string;
  size?: number;
};

export function Input({ title, size, ...rest }: Props) {
  return (
    <Container size={size}>
      <Title>{title}</Title>

      <InputText
        cursorColor="#000"
        {...rest}
      />
    </Container>
  );
}
