import styled, { css } from 'styled-components/native';

import { ArrowLeft } from 'phosphor-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFValue(104)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${RFValue(24)}px;
  padding-top: ${RFValue(24)}px;

  background-color: ${({ theme }) => theme.COLORS.PRODUCT.green_light};
`;

export const BackButton = styled.TouchableOpacity`
  /* position: absolute;

  left: 24px;
  top: 56px; */
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.FONTS.FONTS_SIZE.xxlarge,
  color: theme.COLORS.PRODUCT.green_dark,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.gray_100};
    font-size: ${theme.FONTS.FONTS_SIZE.xlarge}px;
    font-weight: 700;
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
  `}
  flex: 1;
  text-align: center;
  margin-left: -12px;
`;
