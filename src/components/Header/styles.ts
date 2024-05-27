import styled, { css } from "styled-components/native"

import { ArrowLeft } from "phosphor-react-native"

type HeaderProps = {
  isBgGreen?: boolean
}

export const Container = styled.View<HeaderProps>`
  padding: 44px 24px;

  background-color: ${({ theme, isBgGreen }) =>
    isBgGreen ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_500};
`

export const HeaderStatisticsContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const Icon = styled(ArrowLeft).attrs<HeaderProps>(
  ({ theme, isBgGreen }) => ({
    size: 24,
    color: isBgGreen ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_200
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
