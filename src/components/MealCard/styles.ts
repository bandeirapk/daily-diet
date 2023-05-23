import styled, { css } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;

  margin-top: 8px;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BASE.gray_500};

  padding: 14px 16px 14px 12px;
`;

export const MealHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
    font-size: ${theme.FONTS.FONTS_SIZE.small}px;
    border-right-color: ${theme.COLORS.BASE.gray_400};
  `}

  margin-right: 12px;

  border-right-width: 1px;

  padding-right: 12px;
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.FONTS_FAMILY.regular};
    font-size: ${theme.FONTS.FONTS_SIZE.large}px;
    border-right-color: ${theme.COLORS.BASE.gray_200};
  `}
  flex: 1;
`;

export const IconItem = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 14,
  color: theme.COLORS.PRODUCT.red_mid,
}))``;
``;
