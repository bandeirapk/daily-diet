import styled, { css } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.PRODUCT.green_light};
`;

export const Content = styled.View`
  flex: 1;

  padding: ${RFValue(33)}px ${RFValue(24)}px;

  border-radius: 20px;

  align-items: flex-start;

  background-color: ${({ theme }) => theme.COLORS.BASE.gray_700};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS.FONTS_SIZE.xlarge}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
    color: ${theme.COLORS.BASE.gray_100};
  `}
  font-weight: bold;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS.FONTS_SIZE.large}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.regular};
    color: ${theme.COLORS.BASE.gray_200};
  `}
  margin-top: ${RFValue(8)}px;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS.FONTS_SIZE.medium}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
    color: ${theme.COLORS.BASE.gray_100};
  `}
  margin-top: ${RFValue(24)}px;
`;

export const TagClassification = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${RFValue(24)}px;

  border-radius: 1000px;

  padding: ${RFValue(8)}px ${RFValue(16)}px;

  background-color: ${({ theme }) => theme.COLORS.BASE.gray_600};
`;

export const TextClassification = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS.FONTS_SIZE.large}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.regular};
    color: ${theme.COLORS.BASE.gray_100};
  `}
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 8,
  color: theme.COLORS.PRODUCT.red_mid,
}))``;
``;

export const ButtonContainer = styled.View`
  width: 100%;

  flex: 1;
  justify-content: flex-end;
`;
