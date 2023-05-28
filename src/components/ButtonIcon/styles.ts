import styled, { css } from 'styled-components/native';

import { Plus, PencilSimpleLine } from 'phosphor-react-native';

export type ButtonIconTypeStyleProps = 'BACKGROUND' | 'NO_BACKGROUND';

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 9px;

  border-radius: 6px;
  border-width: ${({ type }) => (type == 'BACKGROUND' ? 0 : 1)}px;

  background-color: ${({ theme, type }) =>
    type == 'BACKGROUND'
      ? theme.COLORS.BASE.gray_200
      : theme.COLORS.BASE.white};
`;

export const IconButton = styled(Plus).attrs(({ theme, color }) => ({
  size: 18,
  color:
    color === 'black' ? theme.COLORS.BASE.gray_100 : theme.COLORS.BASE.white,
}))``;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'BACKGROUND'
      ? theme.COLORS.BASE.white
      : theme.COLORS.BASE.gray_100};
    font-size: ${theme.FONTS.FONTS_SIZE.medium}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
  `}
  margin-left: 12px;
`;
