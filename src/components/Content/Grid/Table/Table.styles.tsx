import styled from "styled-components";

const TableWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;

const TableHeadRow = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: rgba(60, 93, 210, 0.05);
  height: 60px;
  box-sizing: border-box;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 60px;
  cursor: pointer;
  :last-child {
    border-bottom: none;
  }
  :hover {
    background: rgba(60, 93, 210, 0.8);
    border-bottom: 1px solid rgba(60, 93, 210, 0.8);
    > td {
      color: #fff;
    }
  }
`;

const TableHeadCell = styled.th`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #000000;
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  :last-child {
    border-right: none;
  }
`;

export {
  TableWrapper,
  StyledTable,
  TableHead,
  TableBody,
  TableHeadRow,
  TableRow,
  TableHeadCell,
};
