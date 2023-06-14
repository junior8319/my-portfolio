import styled from 'styled-components';

export const TableContainer = styled.section`
  border: none;
  padding: 5px;
  border-radius: 10px;
  width: 100%;
  max-height: 175px;
  overflow-y: scroll;
`;

export const Table = styled.table`
  width: 95%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  width: 100%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const TableBody = styled.tbody`
  @media (max-width: 1100px) {
    font-size: 0.80rem;
  }
`;

export const Row = styled.tr`
  width: 100%;

  @media (max-width: 1100px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const Col = styled.td`
  margin: 0 auto;
  padding: auto;
  text-align: center;
  border-bottom: 1px solid #e1dbdb70;

  @media (max-width: 1100px) {
    display: block;

    &::before {
      content: attr(data-label);
      float: left;
    }
  }
`;

export const HeadCol = styled.th`
  margin: 0 auto;
  padding: auto;
  text-align: center;
  border-bottom: 1px solid #e1dbdb;
`;

export const ColBtnDiv = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    width: 50%;
    margin: auto;
  }
`;

export const ColUpdateBtn = styled.button`
  border: none;
  width: 50%;
  padding: 5px;
  background-color: #bc6412;
  border-radius: 5px;
  font-weight: bold;

  @media (max-width: 1100px) {
    font-size: 0.80rem;
    width: 100px;
    margin: auto;
  }

  &:hover {
    background-color: #e1dbdb;
    color: #bc6412;
  }
`;

export const ColDeleteBtn = styled.button`
  border: none;
  width: 50%;
  padding: 5px;
  background-color: #89250f;
  border-radius: 5px;
  font-weight: bold;

  @media (max-width: 1100px) {
    font-size: 0.80rem;
    width: 100px;
    margin: auto;
  }

  &:hover {
    background-color: #e1dbdb;
    color: #89250f;
  }
`;
