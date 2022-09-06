import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.black};
  `}
`;
