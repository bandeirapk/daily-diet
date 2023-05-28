import styled, { css } from 'styled-components/native';

type Props = {
  size?: number;
};

export const Container = styled.TouchableOpacity<Props>`
  width: ${({ size }) => (size ? size : '100')}%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.BASE.gray_200};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.white};
    font-size: ${theme.FONTS.FONTS_SIZE.medium}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
  `}
  font-weight: 700;
`;
