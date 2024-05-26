import styled, { css } from "styled-components/native"

import { ArrowLeft } from "phosphor-react-native"

export const Container = styled.View`
  align-items: center;

  padding: 44px 24px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))``

export const IconContainer = styled.TouchableOpacity`
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

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
`
