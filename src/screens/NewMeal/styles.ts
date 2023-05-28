import styled, { css } from 'styled-components/native';

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

export const DateInfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DietAskContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  margin-top: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS.FONTS_SIZE.medium}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
    color: ${theme.COLORS.BASE.gray_100};
  `}
`;

export const ButtonContainer = styled.View`
  width: 100%;

  flex: 1;
  justify-content: flex-end;
`;
