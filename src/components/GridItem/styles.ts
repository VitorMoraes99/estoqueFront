import styled from 'styled-components';

export const Tr = styled.tr``;

export const Td = styled.td<{ alignCenter?: boolean }>`
  padding-top: 15px;
  text-align: ${({ alignCenter }) => (alignCenter ? 'center' : 'start')};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
  }
`;