import styled, { css } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
  isActive?: boolean;
  size?: number;
};

export const Container = styled.TouchableOpacity<Props>`
  width: ${({ size }) => size || 100}%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border-width: ${({ isActive }) => (isActive ? 1 : 0)}px;
  border-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PRODUCT.green_mid : theme.COLORS.PRODUCT.red_mid};

  padding: ${RFValue(16)}px;

  background-color: ${({ theme }) => theme.COLORS.BASE.gray_600};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS.FONTS_SIZE.medium}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
    color: ${theme.COLORS.BASE.gray_100};
  `}
  font-weight: 700;
  margin-left: 8px;
`;

export const IconItem = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 14,
  color: theme.COLORS.PRODUCT.red_mid,
}))``;
``;
