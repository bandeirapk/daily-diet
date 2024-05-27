import { ReactNode } from "react"

import {
  Container,
  Subtitle,
  Title,
  TitleHeader,
  Icon,
  IconContainerStatistics,
  DefaultContainerHeader,
  HeaderStatisticsContainer
} from "./styles"

type HeaderProps = {
  children: ReactNode
  bgGreen?: boolean
}

function Header({ children, bgGreen }: HeaderProps) {
  return <Container isBgGreen={bgGreen}>{children}</Container>
}

function HeaderTitleStatistics() {
  return (
    <>
      <IconContainerStatistics>
        <Icon />
      </IconContainerStatistics>

      <HeaderStatisticsContainer>
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </HeaderStatisticsContainer>
    </>
  )
}

function HeaderTitleDefault() {
  return (
    <>
      <IconContainerStatistics>
        <Icon />
      </IconContainerStatistics>

      <DefaultContainerHeader>
        <TitleHeader>Nova refeição</TitleHeader>
      </DefaultContainerHeader>
    </>
  )
}

Header.Statistics = HeaderTitleStatistics
Header.Default = HeaderTitleDefault

export { Header }
