import { ScrollView, View } from "react-native"

import { useNavigation } from "@react-navigation/native"

import { Header } from "@/components/Header"
import { Button } from "@/components/Button"

import {
  ButtonContainer,
  Container,
  Content,
  Description,
  Status,
  Subtitle,
  Tag,
  TextContainer,
  TextTag,
  Title
} from "./styles"

export function Meal() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Container>
        <Header healthyMealHeader="diet">
          <Header.Default
            title="Refeição"
            onPress={handleGoBack}
          />
        </Header>

        <Content>
          <TextContainer>
            <View>
              <Title>Sanduíche</Title>
              <Description>
                Sanduíche de pão integral com atum e salada de alface e tomate
              </Description>
            </View>

            <View>
              <Subtitle>Data e hora</Subtitle>
              <Description>12/08/2022 às 16:00</Description>
            </View>

            <Tag>
              <Status />
              <TextTag>dentro da dieta</TextTag>
            </Tag>
          </TextContainer>

          <ButtonContainer>
            <Button>
              <Button.Icon
                icon="edit"
                title="Editar refeição"
                activeOpacity={0.7}
              />

              <Button.Icon
                icon="delete"
                title="Excluir refeição"
                activeOpacity={0.7}
                isOutline
              />
            </Button>
          </ButtonContainer>
        </Content>
      </Container>
    </ScrollView>
  )
}
