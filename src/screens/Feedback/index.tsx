import onDietPng from "@/assets/on-diet.png"

import {
  Container,
  Subtitle,
  TextContainer,
  TextHighlighted,
  Title,
  Image,
  ButtonContainer
} from "./styles"
import { Button } from "@/components/Button"

export function Feedback() {
  return (
    <Container>
      <TextContainer>
        <Title>Continue assim!</Title>
        <Subtitle>
          Você continua <TextHighlighted>dentro da dieta. </TextHighlighted>
          Muito bem!
        </Subtitle>
      </TextContainer>

      <Image source={onDietPng} />

      <ButtonContainer>
        <Button>
          <Button.Default title="Ir para a página inicial" />
        </Button>
      </ButtonContainer>
    </Container>
  )
}
