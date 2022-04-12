import { SearchIcon } from "../../../../../assets/icons";
import {
  SearchBoxWrapper,
  SearchInput,
  SearchIconWrapper,
} from "./SearchBox.styles";

const SearchBox = (): JSX.Element => {
  return (
    <SearchBoxWrapper>
      <SearchInput placeholder="Search for data..." />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchBoxWrapper>
  );
};

export default SearchBox;
