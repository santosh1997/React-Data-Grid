import { SearchIcon } from "../../../../../assets/icons";
import {
  SearchBoxWrapper,
  SearchInput,
  SearchIconWrapper,
} from "./SearchBox.styles";
import { debounce } from "lodash";
import React from "react";

interface IProps {
  onSearch: (searchText: string) => void;
}
const SearchBox = ({ onSearch }: IProps): JSX.Element => {
  const onChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onSearch(event.target.value),
    300
  );
  return (
    <SearchBoxWrapper>
      <SearchInput placeholder="Search for data..." onChange={onChange} />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchBoxWrapper>
  );
};

export default SearchBox;
