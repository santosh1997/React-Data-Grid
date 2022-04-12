import { ColumnDisplayNameType, GridChangeDataType } from "../../Grid.types";

const months: { [key: string]: string } = {
  "1": "JANUARY",
  "2": "FEBRUARY",
  "3": "MARCH",
  "4": "APRIL",
  "5": "MAY",
  "6": "JUNE",
  "7": "JULY",
  "8": "AUGUST",
  "9": "SEPTEMBER",
  "10": "OCTOBER",
  "11": "NOVEMBER",
  "12": "DECEMBER",
};

const getDay = (year: string, month: string, date: string): string => {
  const day = `${months[month]} ${date}, ${year}`,
    currentDate = new Date();

  if (isDateEqual(currentDate, year, month, date)) return `TODAY (${day})`;
  else {
    currentDate.setDate(currentDate.getDate() - 1);
    return isDateEqual(currentDate, year, month, date)
      ? `YESTERDAY (${day})`
      : day;
  }
};

const isDateEqual = (
  dateObj: Date,
  year: string,
  month: string,
  date: string
): boolean => {
  const dateObjYear = dateObj.getFullYear().toString(),
    dateObjMonth = dateObj.getMonth().toString(),
    dateObjDate = dateObj.getDate().toString();
  return year === dateObjYear && month === dateObjMonth && date === dateObjDate;
};

const getGridChangeDescription = (
  change: GridChangeDataType,
  columnDisplayName: ColumnDisplayNameType
): string => {
  if (change.newValue && change.oldValue)
    return `${columnDisplayName[change.column]} changed from "${
      change.oldValue
    }" to "${change.newValue}" at row ${change.recordIndex + 1}`;
  if (change.newValue)
    return `Added ${columnDisplayName[change.column]} value as "${
      change.newValue
    }" at  row ${change.recordIndex + 1}`;
  if (change.oldValue)
    return `Deleted ${columnDisplayName[change.column]} value "${
      change.oldValue
    }" at  row ${change.recordIndex + 1}`;
  return `No value change`;
};

const getDisplayTime = (time: string): string => {
  const date = new Date(parseInt(time));
  return `${getNormalizedTwoDigits(date.getHours())}:${getNormalizedTwoDigits(
    date.getMinutes()
  )}`;
};

const getDateKey = (date: Date): string => {
  return `${date.getFullYear()}${getNormalizedTwoDigits(
    date.getMonth()
  )}${getNormalizedTwoDigits(date.getDate())}`;
};

const getNormalizedTwoDigits = (value: number) => {
  return value > 9 ? `${value}` : `0${value}`;
};

export { getDay, getGridChangeDescription, getDisplayTime, getDateKey };
