import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  gap: 34px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  padding: 40px 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const OptionSelectContainer = styled.View`
  width: 100%;

  gap: 10px;

  flex-direction: row;
  justify-content: space-between;
`

export const TitleSelectContainer = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-bottom: 8px;
`

export const ButtonContainer = styled.View`
  width: 100%;

  position: absolute;
  bottom: 0;

  align-self: center;

  padding-bottom: 25px;
`
