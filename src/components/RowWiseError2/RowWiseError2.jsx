function printErrors(errorArray) {
  errorArray.forEach((item) => {
    const row = item.row;
    const errors = item.errors;
    if (row !== undefined && errors !== undefined) {
      printValuesRecursive(item, row);
    }
  });
}

function printValuesRecursive(obj, row, prefix = "") {
  if (typeof obj === "object" && obj !== null) {
    for (const [key, value] of Object.entries(obj)) {
      const newPrefix = prefix ? `${prefix} - ${key}` : key;
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          printValuesRecursive(item, row, `${newPrefix} - ${index}`);
        });
      } else if (typeof value === "object" && value !== null) {
        printValuesRecursive(value, row, newPrefix);
      } else {
        console.log(`row - ${row} - ${newPrefix} - ${value}.`);
      }
    }
  }
}

// Given array
const errorArray = [
  {
    row: 2,
    errors: [
      {
        barcode: [
          {
            details: "product with this barcode already exists.",
            code: "unique",
          },
        ],
      },
    ],
  },
  {
    row: 3,
    errors: [
      {
        barcode: [
          {
            details: "product with this barcode already exists.",
            code: "unique",
          },
        ],
      },
    ],
  },
];

// Call the function

import React from "react";

function RowWiseError2(props) {
  printErrors(errorArray);
  return <div>yuu</div>;
}

export default RowWiseError2;
