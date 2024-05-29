import styled, { css } from "styled-components/native"

export const Container = styled.Pressable`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  padding: 17px 16px 17px 12px;
`

export const ContainerDescriptionMeal = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}

  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};

  margin-right: 12px;
  padding-right: 12px;
`

export const NameMeal = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  flex: 1;
`

export const StatusMeal = styled.View`
  width: 14px;
  height: 14px;

  border-radius: 100px;

  margin-left: 12px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`
