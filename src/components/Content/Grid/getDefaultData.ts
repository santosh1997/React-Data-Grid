import { GridDataType } from "./Grid.types";

const getDefaultData = (count: number): GridDataType => {
  const columnDisplayName = {
      name: "Student Name",
      age: "Age",
      email: "Email",
      mark1: "Score 1",
      mark2: "Score 2",
      mark3: "Score 3",
      mark4: "Score 4",
      mark5: "Score 5",
    },
    students = [];
  for (let i = 1; i <= count; i++) {
    students.push({
      name: `Student ${i}`,
      age: Math.floor(Math.random() * 100).toString(),
      email: `student${i}@mail.com`,
      mark1: Math.floor(Math.random() * 100).toString(),
      mark2: Math.floor(Math.random() * 100).toString(),
      mark3: Math.floor(Math.random() * 100).toString(),
      mark4: Math.floor(Math.random() * 100).toString(),
      mark5: Math.floor(Math.random() * 100).toString(),
    });
  }
  return { records: students, columnDisplayName, changeHistory: {} };
};

export default getDefaultData;
