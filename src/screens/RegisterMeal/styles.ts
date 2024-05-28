import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Content = styled.View`
  flex: 1;
  width: 100%;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`
