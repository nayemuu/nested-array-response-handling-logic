// Given array
const input1 = [
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

const input2 = [
  {
    type: "value_error",
    loc: [],
    msg: "Value error, Invalid file type. Only CSV files are supported.",
  },
];
const isNumber = (num) => {
  if (typeof num === "number") {
    return true;
  } else {
    return false;
  }
};

const isString = (str) => {
  if (typeof str === "string") {
    return true;
  } else {
    return false;
  }
};

function isKeyValuePairObject(obj) {
  return (
    obj !== null &&
    typeof obj === "object" &&
    !Array.isArray(obj) &&
    Object.keys(obj).length > 0
  );
}

function isArray(arr) {
  return Array.isArray(arr);
}

import React from "react";

function RowWiseError(props) {
  return <div>yuu</div>;
}

export default RowWiseError;
