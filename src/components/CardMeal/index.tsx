import { PressableProps } from "react-native"

import {
  Container,
  ContainerDescriptionMeal,
  Hour,
  NameMeal,
  StatusMeal
} from "./styles"

type CardMealProps = PressableProps

export function CardMeal({ ...rest }: CardMealProps) {
  return (
    <Container {...rest}>
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
