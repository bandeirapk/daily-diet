import { TouchableOpacityProps } from "react-native"
import { Container, Status, Title } from "./styles"

export type SelectProps = TouchableOpacityProps & {
  title: "Sim" | "Não"
}

export function Select({ title, ...rest }: SelectProps) {
  return (
    <Container {...rest}>
      <Status title={title} />
      <Title>{title}</Title>
    </Container>
  )
}
