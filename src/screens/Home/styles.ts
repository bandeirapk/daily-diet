import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  margin-top: 40px;

  padding: 0 24px;
`;

export const ContainerHeaderHome = styled.View`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 100px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`