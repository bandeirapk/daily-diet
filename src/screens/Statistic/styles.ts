import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;

  padding: ${RFValue(33)}px ${RFValue(24)}px;

  align-items: center;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.BASE.gray_700};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONTS.FONTS_SIZE.medium}px;
  font-family: ${({ theme }) => theme.FONTS.FONTS_FAMILY.bold};
  color: ${({ theme }) => theme.COLORS.BASE.gray_100};

  margin-bottom: 23px;
`;

export const MealsInDiet = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;
