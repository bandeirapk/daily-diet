import styled, { css } from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  align-items: center;

  margin-top: 32px;

  border-radius: 8px;

  padding: 20px 70px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
` 
