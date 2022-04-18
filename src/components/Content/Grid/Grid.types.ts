export type GridChangeDataType = {
  recordIndex: number;
  column: string;
  oldValue: string;
  newValue: string;
};

export type GridHistoryDataType = {
  [dateKey: string]: {
    year: string;
    month: string;
    date: string;
    changes: {
      [time: string]: GridChangeDataType;
    };
  };
};

export type GridRecordType = { [key: string]: string }[];

export type ColumnDisplayNameType = { [key: string]: string };

export type GridDataType = {
  records: GridRecordType;
  columnDisplayName: ColumnDisplayNameType;
  changeHistory: GridHistoryDataType;
  searchText?: string;
};
