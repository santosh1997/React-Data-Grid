import getDefaultData from "./getDefaultData";
import { GridWrapper } from "./Grid.styles";
import GridHeader from "./GridHeader";
import Table from "./Table/Table";
import useGridState from "./useGridState";

const Grid = (): JSX.Element => {
  const { data, onChange, onSearch } = useGridState(getDefaultData);
  return (
    <GridWrapper>
      <GridHeader
        onSearch={onSearch}
        changeHistory={data.changeHistory}
        columnDisplayName={data.columnDisplayName}
      />
      <Table
        records={data.records}
        columnDisplayName={data.columnDisplayName}
        onChange={onChange}
        searchText={data.searchText}
      />
    </GridWrapper>
  );
};

export default Grid;
