import { CancelIcon, ClockIcon } from "../../../../../assets/icons";
import { GridHistoryDataType, ColumnDisplayNameType } from "../../Grid.types";
import {
  GridHistoryWrapper,
  GridHistoryHeader,
  GridHistoryTitle,
  ClockIconWrapper,
  CancelIconWrapper,
} from "./GridHistory.styles";
import GridHistoryContent from "./GridHistoryContent";

interface IProps {
  isOpen: boolean;
  close: () => void;
  changeHistory: GridHistoryDataType;
  columnDisplayName: ColumnDisplayNameType;
}

const GridHistory = ({
  isOpen,
  close,
  changeHistory,
  columnDisplayName,
}: IProps): JSX.Element => {
  return (
    <GridHistoryWrapper className={isOpen ? "Open" : ""}>
      <GridHistoryHeader>
        <ClockIconWrapper>
          <ClockIcon />
        </ClockIconWrapper>
        <GridHistoryTitle>History</GridHistoryTitle>
        <CancelIconWrapper onClick={close}>
          <CancelIcon />
        </CancelIconWrapper>
      </GridHistoryHeader>
      <GridHistoryContent
        changeHistory={changeHistory}
        columnDisplayName={columnDisplayName}
      />
    </GridHistoryWrapper>
  );
};

export default GridHistory;
