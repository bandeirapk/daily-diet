import { Container, Content } from "./styles"

import { Header } from "@/components/Header"
import { Input } from "@/components/Input"

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
      </Content>
    </Container>
  )
}
