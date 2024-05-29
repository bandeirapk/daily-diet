import { ScrollView, View } from "react-native"

import { useNavigation } from "@react-navigation/native"

import { Header } from "@/components/Header"
import { Input } from "@/components/Input"
import { Select } from "@/components/Select"
import { Button } from "@/components/Button"

import {
  ButtonContainer,
  Container,
  Content,
  OptionSelectContainer,
  TitleSelectContainer
} from "./styles"

export function RegisterMeal() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  function handleCreateNewMeal() {
    navigation.navigate("feedback")
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Container>
        <Header>
          <Header.Default
            title="Nova refeição"
            onPress={handleGoBack}
          />
        </Header>

        <Content>
          <Input>
            <Input.Field title="Nome" />
            <Input.FieldMultiline title="Descrição" />
            <Input.DateAndTime />
          </Input>

          <View>
            <TitleSelectContainer>Está dentro da dieta?</TitleSelectContainer>

            <OptionSelectContainer>
              <Select
                title="Sim"
                isSelected
              />
              <Select title="Não" />
            </OptionSelectContainer>
          </View>

          <ButtonContainer>
            <Button>
              <Button.Default
                title="Cadastrar refeição"
                activeOpacity={0.7}
                onPress={handleCreateNewMeal}
              />
            </Button>
          </ButtonContainer>
        </Content>
      </Container>
    </ScrollView>
  )
}
