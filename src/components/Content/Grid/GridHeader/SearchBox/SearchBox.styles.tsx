import styled from "styled-components";

const SearchBoxWrapper = styled.div`
  width: 464px;
  height: 30px;
  position: relative;
  display: inline-block;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding-left: 11px;
  ::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    opacity: 0.5;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 11px;
  top: 8px;
  line-height: 14px;
`;

export { SearchBoxWrapper, SearchInput, SearchIconWrapper };
