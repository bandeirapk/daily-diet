import { SectionList } from "react-native"

import LogoSvg from "@/assets/logo.svg"

import meals from "../../utils/data"

import { CardPercentMeal } from "@/components/CardPercentMeal"
import { Button } from "@/components/Button"
import { CardMeal } from "@/components/CardMeal"

import {
  Container,
  ContainerHeaderHome,
  ProfileImage,
  Text,
  TextList
} from "./styles"

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

      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={() => <CardMeal />}
        contentContainerStyle={{ paddingBottom: 24, gap: 10 }}
        renderSectionHeader={({ section: { title } }) => (
          <TextList>{title}</TextList>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
