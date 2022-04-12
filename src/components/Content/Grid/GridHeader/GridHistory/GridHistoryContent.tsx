import { GridHistoryDataType, ColumnDisplayNameType } from "../../Grid.types";
import GridDayHistory from "./GridDayHistory";
import {
  GridHistoryContentContainer,
  GridHistoryContentWrapper,
} from "./GridHistory.styles";
import { getDay } from "./GridHistory.utils";

interface IProps {
  changeHistory: GridHistoryDataType;
  columnDisplayName: ColumnDisplayNameType;
}

const GridHistoryContent = ({
  changeHistory,
  columnDisplayName,
}: IProps): JSX.Element => {
  const dates = Object.keys(changeHistory);
  return (
    <GridHistoryContentWrapper>
      <GridHistoryContentContainer>
        {dates.map((date) => (
          <GridDayHistory
            dayHistory={changeHistory[date].changes}
            day={getDay(
              changeHistory[date].year,
              changeHistory[date].month,
              changeHistory[date].date
            )}
            columnDisplayName={columnDisplayName}
          />
        ))}
      </GridHistoryContentContainer>
    </GridHistoryContentWrapper>
  );
};

export default GridHistoryContent;
