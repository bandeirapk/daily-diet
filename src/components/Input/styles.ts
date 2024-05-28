import styled, { css } from "styled-components/native"

export const Container = styled.View`
  width: 100%;

  gap: 12px;
`

export const ContainerCustomize = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const TextInput = styled.TextInput`
  width: 100%;
  min-height: 48px;

  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  padding: 12px;
`

export const InputMultiline = styled.TextInput`
  width: 100%;
  height: 120px;

  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  padding: 12px;
`

export const InputDateAndTime = styled.TextInput`
  min-width: 48%;
  min-height: 48px;

  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  padding: 12px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-bottom: 4px;
`
