import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;

  padding: ${RFValue(66)}px ${RFValue(24)}px;

  background-color: ${({ theme }) => theme.COLORS.BASE.gray_700};
`;

export const TextMeal = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.gray_100};
    font-size: ${theme.FONTS.FONTS_SIZE.large}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.regular};
  `}

  margin-top: ${RFValue(40)}px;
  margin-bottom: ${RFValue(8)}px;
`;
