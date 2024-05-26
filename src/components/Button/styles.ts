import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const CustomizeButtonDefault = styled.TouchableOpacity`
  border-radius: 6px;

  padding: 16px 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const ContainerButtonIcon = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  border-radius: 6px;

  padding: 16px 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const TitleButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
    text-align: center;
  `};
`
