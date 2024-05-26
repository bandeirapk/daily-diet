import styled, { css } from "styled-components/native"

type TitleProps = {
  isBox?: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const Content = styled.View`
  flex: 1;
  align-items: center;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 33px 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text<TitleProps>`
  ${({ theme, isBox }) => css`
    font-size: ${isBox ? theme.FONT_SIZE.XL : theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`

export const ContainerInformation = styled.View`
  width: 100%;
  height: 340px;

  gap: 12px;

  margin-top: 24px;
`

export const Box = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 8px;

  padding: 22px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
    text-align: center;
  `};
`

export const DailyMeat = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`
