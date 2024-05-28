import { TouchableOpacityProps } from "react-native"
import { Container, Status, Title, SelectProps } from "./styles"

type Props = TouchableOpacityProps & SelectProps & {}

export function Select({ title = "Sim", isSelected = false, ...rest }: Props) {
  return (
    <Container
      isSelected={isSelected}
      title={title}
      {...rest}
    >
      <Status title={title} />
      <Title>{title}</Title>
    </Container>
  )
}
