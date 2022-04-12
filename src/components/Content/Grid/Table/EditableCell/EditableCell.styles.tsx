import styled from "styled-components";

const TableCell = styled.td`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  text-align: center;
  padding: 0px;
  :last-child {
    border-right: none;
  }
  &.Editable {
    box-shadow: inset 0px 0px 8px 2px rgba(60, 93, 210, 0.3);
    background: #fff;
    border: solid;
    border-color: #3c5dd2;
    border-width: 2.7px 2px 2.7px 2px;
  }
`;

const EditableCellWrapper = styled.div`
  padding: 5px;
`;

const CellContent = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ContentEditor = styled.input`
  height: 40px;
  width: calc(100% - 10px);
  outline: none;
  border: none;
`;

export { TableCell, EditableCellWrapper, CellContent, ContentEditor };
