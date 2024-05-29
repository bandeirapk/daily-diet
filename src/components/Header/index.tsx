import { Fragment, ReactNode } from "react"
import { TouchableOpacityProps } from "react-native"

import {
  Container,
  Subtitle,
  Title,
  TitleHeader,
  Icon,
  IconContainerStatistics,
  DefaultContainerHeader,
  HeaderStatisticsContainer,
  HeaderProps
} from "./styles"

type HeaderPropsWithChildren = HeaderProps & {
  children: ReactNode
}

type HeaderStatisticsProps = HeaderProps & TouchableOpacityProps

type HeaderTitleProps = {
  title: string
} & TouchableOpacityProps

function Header({
  children,
  healthyMealHeader = "default"
}: HeaderPropsWithChildren) {
  return <Container healthyMealHeader={healthyMealHeader}>{children}</Container>
}

function HeaderTitleStatistics({
  healthyMealHeader,
  ...rest
}: HeaderStatisticsProps) {
  return (
    <Fragment>
      <IconContainerStatistics {...rest}>
        <Icon healthyMealHeader={healthyMealHeader} />
      </IconContainerStatistics>

      <HeaderStatisticsContainer>
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </HeaderStatisticsContainer>
    </Fragment>
  )
}

function HeaderTitleDefault({ title, ...rest }: HeaderTitleProps) {
  return (
    <Fragment>
      <IconContainerStatistics {...rest}>
        <Icon />
      </IconContainerStatistics>

      <DefaultContainerHeader>
        <TitleHeader>{title}</TitleHeader>
      </DefaultContainerHeader>
    </Fragment>
  )
}

Header.Statistics = HeaderTitleStatistics
Header.Default = HeaderTitleDefault

export { Header }
