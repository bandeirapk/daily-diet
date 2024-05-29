import { useNavigation } from "@react-navigation/native"
import { Container, Icon, IconContainer, SubTitle, Title } from "./styles"

export function CardPercentMeal() {
  const { navigate } = useNavigation()

  return (
    <Container>
      <IconContainer onPress={() => navigate("statistics")}>
        <Icon />
      </IconContainer>

      <Title>90,86%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}
