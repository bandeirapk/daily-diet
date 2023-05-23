import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
  color?: string;
  size?: number;
};

export const Container = styled.View<Props>`
  width: ${({ size }) => (size ? size : 100)}%;

  justify-content: center;
  align-items: center;

  margin-bottom: 11px;

  border-radius: 8px;

  padding: ${RFValue(16)}px;

  background-color: ${({ theme, color }) =>
    color ? color : theme.COLORS.BASE.gray_600};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONTS.FONTS_SIZE.xxlarge}px;
  font-family: ${({ theme }) => theme.FONTS.FONTS_FAMILY.bold};
  color: ${({ theme }) => theme.COLORS.BASE.gray_100};

  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONTS.FONTS_SIZE.large}px;
  font-family: ${({ theme }) => theme.FONTS.FONTS_FAMILY.regular};
  color: ${({ theme }) => theme.COLORS.BASE.gray_200};
  text-align: center;
`;
