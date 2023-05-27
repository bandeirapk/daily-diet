import styled, { css } from 'styled-components/native';

import { TextInput } from 'react-native';

type Props = {
  size?: number;
};

export const Container = styled.View<Props>`
  width: ${({ size }) => size || 100}%;

  margin-bottom: 24px;
`;

export const InputText = styled(TextInput)`
  ${({ theme }) => css`
    font-size: ${theme.FONTS.FONTS_SIZE.large}px;
    color: ${theme.COLORS.BASE.gray_100};
    font-family: ${theme.FONTS.FONTS_FAMILY.regular};
    border-color: ${theme.COLORS.BASE.gray_500};
    background-color: ${theme.COLORS.BASE.gray_700};
  `};
  border-width: 1px;
  border-radius: 6px;

  padding: 14px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS.FONTS_SIZE.medium}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
    font-weight: 700;
    color: ${theme.COLORS.BASE.gray_200};
  `};
  margin-bottom: 4px;
`;
