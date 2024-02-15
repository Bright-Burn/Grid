import {Row} from "../core";

export const flattenRowsArray = (rows: Row[]): Row[] => {
  const flattenedArray: Row[] = [];

  rows.forEach((row) => {
    flattenedArray.push(row);

    if (row.rows && Array.isArray(row.rows)) {
      flattenedArray.push(...flattenRowsArray(row.rows));
    }
  });

  return flattenedArray;
};
