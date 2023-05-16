import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BASE.gray_700};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.PRODUCT.green_dark,
}))``;

export const LoadText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.FONTS_FAMILY.regular};
  font-size: ${({ theme }) => theme.FONTS.FONTS_SIZE.large};
  color: ${({ theme }) => theme.COLORS.BASE.gray_200};
`;
