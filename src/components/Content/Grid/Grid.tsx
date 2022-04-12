import getDefaultData from "./getDefaultData";
import { GridWrapper } from "./Grid.styles";
import GridHeader from "./GridHeader";
import Table from "./Table/Table";
import useGridState from "./useGridState";

const Grid = (): JSX.Element => {
  const { data, onChange } = useGridState(getDefaultData);
  return (
    <GridWrapper>
      <GridHeader
        changeHistory={data.changeHistory}
        columnDisplayName={data.columnDisplayName}
      />
      <Table
        records={data.records}
        columnDisplayName={data.columnDisplayName}
        onChange={onChange}
      />
    </GridWrapper>
  );
};

export default Grid;
