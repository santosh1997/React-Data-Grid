import { ClockIcon } from "../../../../../assets/icons";
import {
  GridHistoryButtonWrapper,
  GridHistoryStyledButton,
  GridHistoryButtonContent,
  ClockIconWrapper,
} from "./GridHistoryButton.styles";

interface IProps {
  onClick: () => void;
}

const GridHistoryButton = ({ onClick }: IProps): JSX.Element => {
  return (
    <GridHistoryButtonWrapper onClick={onClick}>
      <GridHistoryStyledButton>
        <ClockIconWrapper>
          <ClockIcon />
        </ClockIconWrapper>

        <GridHistoryButtonContent>History</GridHistoryButtonContent>
      </GridHistoryStyledButton>
    </GridHistoryButtonWrapper>
  );
};

export default GridHistoryButton;
