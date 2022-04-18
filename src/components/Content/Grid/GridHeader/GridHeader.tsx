import { useState } from "react";
import { ColumnDisplayNameType, GridHistoryDataType } from "../Grid.types";
import { GridHeaderWrapper } from "./GridHeader.styles";
import GridHistory from "./GridHistory";
import GridHistoryButton from "./GridHistoryButton";
import SearchBox from "./SearchBox";

interface IProps {
  onSearch: (searchText: string) => void;
  changeHistory: GridHistoryDataType;
  columnDisplayName: ColumnDisplayNameType;
}

const GridHeader = ({
  changeHistory,
  columnDisplayName,
  onSearch,
}: IProps): JSX.Element => {
  const [historyOpen, setHistoryOpen] = useState<boolean>(false);
  return (
    <GridHeaderWrapper>
      <SearchBox onSearch={onSearch} />
      <GridHistoryButton onClick={() => setHistoryOpen(true)} />
      <GridHistory
        isOpen={historyOpen}
        close={() => setHistoryOpen(false)}
        changeHistory={changeHistory}
        columnDisplayName={columnDisplayName}
      />
    </GridHeaderWrapper>
  );
};

export default GridHeader;
