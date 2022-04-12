import { CircleIcon } from "../../../../../assets/icons";
import { GridChangeDataType, ColumnDisplayNameType } from "../../Grid.types";
import {
  GridDayHistoryWrapper,
  GridDayHistoryContentWrapper,
  GridDayHistoryContentHeader,
  GridChangeContainer,
  GridChangeDefinition,
  GridChangeTime,
  CircleIconWrapper,
} from "./GridHistory.styles";
import { getDisplayTime, getGridChangeDescription } from "./GridHistory.utils";

interface IProps {
  day: string;
  dayHistory: { [time: string]: GridChangeDataType };
  columnDisplayName: ColumnDisplayNameType;
}

const GridDayHistory = ({
  dayHistory,
  day,
  columnDisplayName,
}: IProps): JSX.Element => {
  const times = Object.keys(dayHistory).reverse();

  return (
    <GridDayHistoryWrapper>
      <CircleIconWrapper>
        <CircleIcon />
      </CircleIconWrapper>
      <GridDayHistoryContentHeader>{day}</GridDayHistoryContentHeader>
      <GridDayHistoryContentWrapper>
        {times.map((time) => (
          <GridChangeContainer>
            <GridChangeDefinition>
              {getGridChangeDescription(dayHistory[time], columnDisplayName)}
            </GridChangeDefinition>
            <GridChangeTime>{getDisplayTime(time)}</GridChangeTime>
          </GridChangeContainer>
        ))}
      </GridDayHistoryContentWrapper>
    </GridDayHistoryWrapper>
  );
};

export default GridDayHistory;
