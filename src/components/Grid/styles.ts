import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto;
  padding: 20px; 
  overflow-x: auto; 
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Thead = styled.thead`
  background-color: teal;
  color: #fff;
  font-weight: bold;

  tr {
    height: 50px;
  }
`;

export const Tbody = styled.tbody`
width: 100%;
  tr {
    &:nth-child(odd) {
      background-color: #f9f9f9;
    }
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  color: #555;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
`;

export const TdAlignCenter = styled.td`
  text-align: center;

  svg {
    cursor: pointer;
    font-size: 18px;
    color: #ff4d4d;
    transition: color 0.2s ease;

    &:hover {
      color: #cc0000;
    }
  }
`;

export const EmptyProductsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

export const EmptyProductsText = styled.span`
  width: 100%;
  text-align: center;
`
