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

type BoxStatisticsProps = {}

export function Statistics() {
  return (
    <Container>
      <Header />

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
            <Box>
              <Title isBox>99</Title>
              <Subtitle>refeições dentro da dieta</Subtitle>
            </Box>

            <Box>
              <Title isBox>10</Title>
              <Subtitle>refeições fora da dieta</Subtitle>
            </Box>
          </DailyMeat>
        </ContainerInformation>
      </Content>
    </Container>
  )
}
