import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.BASE.gray_200};
  border-radius: 20px;
`;
