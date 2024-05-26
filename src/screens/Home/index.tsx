import { CardPercentMeal } from "@/components/CardPercentMeal"

import LogoSvg from "@/assets/logo.svg"

import { Container, ContainerHeaderHome, ProfileImage } from "./styles"

export function Home() {
  return (
    <Container>
      <ContainerHeaderHome>
        <LogoSvg />
        <ProfileImage source={{ uri: "https://github.com/bandeirapk.png" }} />
      </ContainerHeaderHome>

      <CardPercentMeal />
    </Container>
  )
}
