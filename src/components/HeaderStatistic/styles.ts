import styled, { css } from 'styled-components/native';

import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  height: 20%;

  align-items: center;

  padding-top: 70px;

  background-color: ${({ theme }) => theme.COLORS.PRODUCT.green_light};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 48px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.FONTS.FONTS_SIZE.xxlarge,
  color: theme.COLORS.PRODUCT.green_dark,
}))``;

export const PercentTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.gray_100};
    font-size: ${theme.FONTS.FONTS_SIZE.xxxlarge}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.gray_200};
    font-size: ${theme.FONTS.FONTS_SIZE.medium}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.regular};
  `}
`;
