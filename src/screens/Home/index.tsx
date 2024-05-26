import { CardPercentMeal } from "@/components/CardPercentMeal"

import LogoSvg from "@/assets/logo.svg"

import { Container, ContainerHeaderHome, ProfileImage, Text } from "./styles"
import { Button } from "@/components/Button"

export function Home() {
  return (
    <Container>
      <ContainerHeaderHome>
        <LogoSvg />
        <ProfileImage source={{ uri: "https://github.com/bandeirapk.png" }} />
      </ContainerHeaderHome>

      <CardPercentMeal />

      <Button>
        <Text>Refeições</Text>
        <Button.Icon
          icon="add"
          title="Nova refeição"
        />
      </Button>
    </Container>
  )
}
