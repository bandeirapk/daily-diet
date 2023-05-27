import React from 'react';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { CheckBox } from '@components/CheckBox';
import { Button } from '@components/Button';

import {
  Container,
  DateInfoContainer,
  Content,
  DietAskContainer,
  Title,
  ButtonContainer,
} from './styles';

export function NewMeals() {
  return (
    <Container>
      <Header title="Nova refeição" />

      <Content>
        <Input title="Nome" />

        <Input
          title="Descrição"
          numberOfLines={6}
          multiline={true}
          textAlignVertical="top"
        />

        <DateInfoContainer>
          <Input
            title="Data"
            keyboardType="numeric"
            size={46}
          />

          <Input
            title="Hora"
            keyboardType="numeric"
            size={46}
          />
        </DateInfoContainer>

        <Title>Está dentro da dieta?</Title>

        <DietAskContainer>
          <CheckBox
            title="Sim"
            size={46}
          />

          <CheckBox
            title="Não"
            size={46}
          />
        </DietAskContainer>

        <ButtonContainer>
          <Button />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
