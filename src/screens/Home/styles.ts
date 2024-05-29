import styled, { css } from "styled-components/native"

export const Container = styled.ScrollView`
  flex: 1;

  margin-top: 40px;

  padding: 0 24px;
`

export const ContainerHeaderHome = styled.View`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-top: 40px;
  margin-bottom: 8px;
`

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 100px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const TextList = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-top: 32px;
`
