import styled, { css } from "styled-components/native"

export type SelectProps = {
  isSelected?: boolean
  title?: "Sim" | "Não"
}

export const Container = styled.TouchableOpacity<SelectProps>`
  min-height: 50px;

  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 6px;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  ${({ theme, isSelected, title }) =>
    isSelected &&
    css`
      border: 1px solid
        ${title === "Sim" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

      background-color: ${title === "Sim"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
    `}
`

export const Status = styled.View<SelectProps>`
  width: 8px;
  height: 8px;

  border-radius: 4px;

  background-color: ${({ theme, title }) =>
    title === "Sim" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`
