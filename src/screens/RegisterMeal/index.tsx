import { View } from "react-native"

import {
  Container,
  Content,
  OptionSelectContainer,
  TitleSelectContainer
} from "./styles"

import { Header } from "@/components/Header"
import { Input } from "@/components/Input"
import { Select } from "@/components/Select"

export function RegisterMeal() {
  return (
    <Container>
      <Header>
        <Header.Default />
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
            <Select title="Sim" />
            <Select title="Não" />
          </OptionSelectContainer>
        </View>
      </Content>
    </Container>
  )
}
