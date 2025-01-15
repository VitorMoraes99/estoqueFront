import styled from "styled-components";

export const Tr = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  color: #555;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const TdAlignCenter = styled.td`
  text-align: center;
  border-bottom: 1px solid #ddd;

  svg {
  margin-right: 10px;

    cursor: pointer;
    &:hover {
      color: teal;
    }
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: teal;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: teal;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;
