import {
  Container,
  ContainerDescriptionMeal,
  Hour,
  NameMeal,
  StatusMeal
} from "./styles"

export function CardMeal() {
  return (
    <Container>
      <ContainerDescriptionMeal>
        <Hour>12:00</Hour>
        <NameMeal
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Salada cesar com frango grelhado
        </NameMeal>
      </ContainerDescriptionMeal>

      <StatusMeal />
    </Container>
  )
}
