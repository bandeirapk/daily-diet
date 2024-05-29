import { useNavigation } from "@react-navigation/native"

import onDietPng from "@/assets/on-diet.png"

import { Button } from "@/components/Button"

import {
  Container,
  Subtitle,
  TextContainer,
  TextHighlighted,
  Title,
  Image,
  ButtonContainer
} from "./styles"

export function Feedback() {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate("home")
  }

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
          <Button.Default
            title="Ir para a página inicial"
            onPress={handleGoHome}
          />
        </Button>
      </ButtonContainer>
    </Container>
  )
}
