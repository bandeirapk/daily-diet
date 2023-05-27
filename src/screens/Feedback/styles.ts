import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS.FONTS_SIZE.xxlarge}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.bold};
    font-weight: bold;
    color: ${theme.COLORS.PRODUCT.green_dark};
  `}
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONTS.FONTS_SIZE.large}px;
    font-family: ${theme.FONTS.FONTS_FAMILY.regular};
    color: ${theme.COLORS.BASE.gray_100};
  `}
  margin-top: 8px;
`;

export const ImageRepresentation = styled.Image`
  height: 288px;
  width: 224px;

  margin-bottom: 32px;
`;
