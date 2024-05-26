import styled from 'styled-components/native';

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;