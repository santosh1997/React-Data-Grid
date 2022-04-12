import {
  ColumnDisplayNameType,
  GridChangeDataType,
  GridRecordType,
} from "../Grid.types";
import EditableCell from "./EditableCell";
import {
  StyledTable,
  TableBody,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper,
} from "./Table.styles";

interface IProps {
  records: GridRecordType;
  columnDisplayName: ColumnDisplayNameType;
  onChange: React.Dispatch<GridChangeDataType>;
}

const Table = ({
  records,
  columnDisplayName,
  onChange,
}: IProps): JSX.Element => {
  const columns = Object.keys(columnDisplayName);
  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
          <TableHeadRow>
            {columns.map((column) => (
              <TableHeadCell key={column}>
                {columnDisplayName[column]}
              </TableHeadCell>
            ))}
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {records.map((record, recordIndex) => (
            <TableRow key={recordIndex}>
              {columns.map((column) => (
                <EditableCell
                  key={column}
                  onChange={(oldValue, newValue) =>
                    onChange({ recordIndex, column, oldValue, newValue })
                  }
                >
                  {record[column]}
                </EditableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
