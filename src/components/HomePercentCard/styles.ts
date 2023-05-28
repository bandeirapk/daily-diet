import styled, { css } from 'styled-components/native';

import { ArrowUpRight } from 'phosphor-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  height: 102px;

  justify-content: center;
  align-items: center;

  margin-top: ${RFValue(32)}px;

  border-radius: 8px;

  padding: ${RFValue(20)}px ${RFValue(16)}px;

  background-color: ${({ theme }) => theme.COLORS.PRODUCT.green_light};
`;

export const OpenButton = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const OpenIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
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
