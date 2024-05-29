import styled, { css } from "styled-components/native"

type ButtonProps = {
  outline?: boolean
}

export const Container = styled.View`
  width: 100%;

  gap: 10px;
`

export const CustomizeButtonDefault = styled.TouchableOpacity`
  border-radius: 6px;

  padding: 16px 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const ContainerButtonIcon = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 6px;
  border: ${({ theme, outline }) =>
    outline && `1px solid ${theme.COLORS.GRAY_100}`};

  padding: 16px 0;

  background-color: ${({ theme, outline }) =>
    outline ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
`

export const TitleButton = styled.Text<ButtonProps>`
  ${({ theme, outline }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${outline ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    text-align: center;
  `};
`
