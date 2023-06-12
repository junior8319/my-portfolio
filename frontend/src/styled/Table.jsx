import styled from 'styled-components';

export const TableContainer = styled.section`
  border: none;
  padding: 5px;
  border-radius: 10px;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  width: 100%;
`;

export const TableBody = styled.tbody`
  /* width: 95%; */
  /* margin: 0; */
  /* padding: 0; */
`;

export const Row = styled.tr`
  width: 100%;
  /* margin: 0; */
  /* padding: 0; */

  @media (max-width: 1100px) {
    font-size: 0.75rem;
  }
`;

export const Col = styled.td`
  margin: 0 auto;
  padding: auto;
  text-align: center;
`;

export const HeadCol = styled.th`
  margin: 0 auto;
  padding: auto;
  text-align: center;
`;

export const ColBtnDiv = styled.div`
  width: 100%;
  text-align: center;
`;

export const ColUpdateBtn = styled.button`
  border: none;
  width: 95%;
  padding: 5px;
  background-color: #bc6412;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: #e1dbdb;
    color: #bc6412;
  }

  @media (max-width: 1100px) {
    font-size: 0.65rem;
    width: 85%;
  }
`;

export const ColDeleteteBtn = styled.button`
  border: none;
  width: 95%;
  padding: 5px;
  background-color: #89250f;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: #e1dbdb;
    color: #89250f;
  }

  @media (max-width: 1100px) {
    font-size: 0.65rem;
    width: 85%;
  }
`;
