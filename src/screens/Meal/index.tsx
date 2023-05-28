import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';

import { Trash, PencilSimpleLine } from 'phosphor-react-native';

import {
  Container,
  Content,
  Title,
  Text,
  DateTitle,
  TagClassification,
  TextClassification,
  Icon,
  ButtonContainer,
} from './styles';

export function Meal() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        title="Refeição"
        onPress={() => navigation.navigate('home')}
      />

      <Content>
        <Title>Sanduíche</Title>

        <Text>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Text>

        <DateTitle>Data e hora</DateTitle>
        <Text>12/10/2021 às 12:00</Text>

        <TagClassification>
          <Icon name="circle" />

          <TextClassification>dentro da dieta</TextClassification>
        </TagClassification>

        <ButtonContainer>
          <ButtonIcon
            title="Editar refeição"
            icon={
              <PencilSimpleLine
                color="white"
                size={18}
              />
            }
            color="white"
          />

          <ButtonIcon
            title="Excluir refeição"
            icon={<Trash size={18} />}
            type="NO_BACKGROUND"
          />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
