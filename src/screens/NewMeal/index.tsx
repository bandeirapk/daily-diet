import React from 'react';

import { useNavigation } from '@react-navigation/native';

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

export function NewMeal() {
  const navigation = useNavigation();

  function handleCreateNewMeal() {
    navigation.navigate('feedback');
  }

  return (
    <Container>
      <Header
        title="Nova refeição"
        onPress={() => navigation.navigate('home')}
      />

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
          <Button
            title="Cadastrar refeição"
            onPress={handleCreateNewMeal}
          />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
