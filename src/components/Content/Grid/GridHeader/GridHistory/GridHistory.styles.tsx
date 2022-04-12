import styled from "styled-components";

const GridHistoryWrapper = styled.div`
  position: fixed;
  width: 500px;
  overflow-y: auto;
  height: 100vh;
  transition: right 0.7s ease-out;
  right: -500px;
  top: 0px;
  background: #fff;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.05);
  ::-webkit-scrollbar {
    display: none;
  }
  &.Open {
    right: 0px;
  }
`;

const GridHistoryHeader = styled.div`
  height: 60px;
  background: #3c5dd2;
`;

const GridHistoryContentWrapper = styled.div`
  background: #fff;
  padding-left: 28.5px;
  height: calc(100% - 60px);
`;

const GridHistoryContentContainer = styled.div`
  width: calc(100% - 28.5px);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  min-height: 100%;
}
`;

const ClockIconWrapper = styled.div`
  display: inline-block;
  padding: 20px 0px 21px 21px;
`;

const CancelIconWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  float: right;
  padding: 20px 20px 20px 0px;
`;

const GridHistoryTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  display: inline-block;
  padding: 19px 0px 19px 17px;
`;

const GridDayHistoryWrapper = styled.div`
  position: relative;
  padding-left: 22.5px;
  padding-top: 36px;
  padding-bottom: 36px;
`;

const CircleIconWrapper = styled.div`
  position: absolute;
  line-height: 14px;
  left: -8px;
`;

const GridDayHistoryContentWrapper = styled.div``;

const GridChangeContainer = styled.div`
  padding-top: 18px;
`;

const GridChangeDefinition = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: inline-block;
  overflow-wrap: break-word;
  width: calc(100% - 36px);
`;

const GridChangeTime = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: inline-block;
  width: 36px;
  height: 17px;
`;

const GridDayHistoryContentHeader = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #000000;
  opacity: 0.5;
`;

export {
  GridDayHistoryWrapper,
  GridHistoryWrapper,
  GridHistoryHeader,
  GridHistoryTitle,
  GridHistoryContentWrapper,
  ClockIconWrapper,
  CancelIconWrapper,
  GridDayHistoryContentWrapper,
  GridDayHistoryContentHeader,
  GridChangeContainer,
  GridChangeDefinition,
  GridChangeTime,
  GridHistoryContentContainer,
  CircleIconWrapper,
};
