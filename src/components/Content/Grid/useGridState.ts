import React, { useState } from "react";
import { GridDataType, GridChangeDataType } from "./Grid.types";
import { getDateKey } from "./GridHeader/GridHistory/GridHistory.utils";

const localStorageKey = "GRID_DATA";

const useGridState = (
  defaultDataGenerator: (count: number) => GridDataType
) => {
  const persistedData = localStorage.getItem(localStorageKey),
    defaultData: GridDataType = persistedData
      ? JSON.parse(persistedData)
      : defaultDataGenerator(100);
  defaultData.searchText = "";

  const [data, setData] = useState<GridDataType>(defaultData);

  const onChange: React.Dispatch<GridChangeDataType> = (gridChange) => {
    const clonedData: GridDataType = JSON.parse(JSON.stringify(data));
    clonedData.records[gridChange.recordIndex][gridChange.column] =
      gridChange.newValue;
    const currentDate = new Date(),
      time = currentDate.getTime(),
      dateKey = getDateKey(currentDate);
    if (!clonedData.changeHistory[dateKey])
      clonedData.changeHistory[dateKey] = {
        year: currentDate.getFullYear().toString(),
        month: currentDate.getMonth().toString(),
        date: currentDate.getDate().toString(),
        changes: {},
      };
    clonedData.changeHistory[dateKey].changes[time] = gridChange;
    localStorage.setItem(localStorageKey, JSON.stringify(clonedData));
    setData(clonedData);
  };

  const onSearch = (searchValue: string) => {
    const clonedData: GridDataType = JSON.parse(JSON.stringify(data));
    clonedData.searchText = searchValue;
    setData(clonedData);
  };

  return { data, onChange, onSearch };
};

export default useGridState;
