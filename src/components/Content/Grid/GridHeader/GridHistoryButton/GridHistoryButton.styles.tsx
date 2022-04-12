import styled from "styled-components";

const GridHistoryButtonWrapper = styled.div`
  display: inline-block;
  float: right;
`;

const GridHistoryStyledButton = styled.button`
  width: 82px;
  height: 30px;
  background: #3c5dd2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: none;
  padding: 0px;
  cursor: pointer;
  > * {
    vertical-align: middle;
  }
`;

const GridHistoryButtonContent = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
`;

const ClockIconWrapper = styled.span`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export {
  GridHistoryButtonWrapper,
  GridHistoryStyledButton,
  GridHistoryButtonContent,
  ClockIconWrapper,
};
