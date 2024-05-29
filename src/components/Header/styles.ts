import styled, { css } from "styled-components/native"

import { ArrowLeft } from "phosphor-react-native"

export type HeaderProps = {
  healthyMealHeader?: "diet" | "noDiet" | "default"
}

export const Container = styled.View<HeaderProps>`
  padding: 36px 24px;

  background-color: ${({ theme, healthyMealHeader }) => {
    switch (healthyMealHeader) {
      case "noDiet":
        return theme.COLORS.RED_LIGHT
      case "diet":
        return theme.COLORS.GREEN_LIGHT
      case "default":
      default:
        return theme.COLORS.GRAY_500
    }
  }};
`

export const HeaderStatisticsContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const Icon = styled(ArrowLeft).attrs<HeaderProps>(
  ({ theme, healthyMealHeader }) => ({
    size: 24,
    color:
      healthyMealHeader === "diet"
        ? theme.COLORS.GREEN_DARK
        : healthyMealHeader === "noDiet"
        ? theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_200
  })
)``

export const IconContainerStatistics = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
  margin-top: 32px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
`
export const TitleHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`

export const DefaultContainerHeader = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`
