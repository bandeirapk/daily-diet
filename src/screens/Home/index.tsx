import { SectionList } from "react-native"

import LogoSvg from "@/assets/logo.svg"

import meals from "../../utils/data"

import { CardPercentMeal } from "@/components/CardPercentMeal"
import { Button } from "@/components/Button"
import { CardMeal } from "@/components/CardMeal"

import { useNavigation } from "@react-navigation/native"

import {
  Container,
  ContainerHeaderHome,
  ProfileImage,
  Text,
  TextList
} from "./styles"

export function Home() {
  const navigation = useNavigation()

  function handleCreateNewMeal() {
    navigation.navigate("registerMeal")
  }

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
          activeOpacity={0.7}
          onPress={handleCreateNewMeal}
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
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      />
    </Container>
  )
}
