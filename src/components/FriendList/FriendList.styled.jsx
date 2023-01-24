import styled from 'styled-components';

export const OnlineStatus = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;
