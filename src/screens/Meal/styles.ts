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

export const ButtonContainer = styled.View`
  width: 100%;

  position: absolute;
  bottom: 0;

  align-self: center;

  padding-bottom: 25px;
`

export const TextContainer = styled.View`
  gap: 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};

  margin-top: 8px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`

export const TextTag = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `};
`
export const Tag = styled.View`
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  gap: 8px;

  border-radius: 1000px;

  padding: 8px 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Status = styled.View`
  width: 8px;
  height: 8px;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};

  /* background-color: ${({ theme, title }) =>
    title === "Sim" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}; */
`
