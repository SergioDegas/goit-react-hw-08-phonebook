import styled from 'styled-components';

export const TextStyled = styled.p`
  margin-right: ${({ theme }) => `${theme.spacing(10)}`};
  margin-left: auto;
  margin-bottom: ${({ theme }) => `${theme.spacing(1)}`};
`;
