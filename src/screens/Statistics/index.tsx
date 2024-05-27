import { useTheme } from "styled-components/native"

import { Header } from "@/components/Header"

import {
  Box,
  Container,
  Content,
  Title,
  Subtitle,
  ContainerInformation,
  DailyMeat
} from "./styles"

export function Statistics() {
  const theme = useTheme()

  return (
    <Container>
      <Header bgGreen>
        <Header.Statistics />
      </Header>

      <Content>
        <Title>Estatísticas Gerais</Title>

        <ContainerInformation>
          <Box>
            <Title isBox>22</Title>
            <Subtitle>melhor sequência de pratos dentro da dieta</Subtitle>
          </Box>

          <Box>
            <Title isBox>109</Title>
            <Subtitle>refeições registradas</Subtitle>
          </Box>

          <DailyMeat>
            <Box style={{ backgroundColor: theme.COLORS.GREEN_LIGHT }}>
              <Title isBox>99</Title>
              <Subtitle>refeições dentro da dieta</Subtitle>
            </Box>

            <Box style={{ backgroundColor: theme.COLORS.RED_LIGHT }}>
              <Title isBox>10</Title>
              <Subtitle>refeições fora da dieta</Subtitle>
            </Box>
          </DailyMeat>
        </ContainerInformation>
      </Content>
    </Container>
  )
}
