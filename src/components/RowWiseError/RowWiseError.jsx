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
  let errorArray = [];

  // const getAllErrors = (err) => {
  //   if (isNumber(err)) {
  //     arr = [...arr, err];
  //     return 0;
  //   }

  //   if (isString(err)) {
  //     arr = [...arr, err];
  //     return 0;
  //   }

  //   if (isKeyValuePairObject(err)) {
  //     for (let key in err) {
  //       getAllErrors(err[key]);
  //     }
  //   }

  //   if (isArray(err)) {
  //     err.map((errItem) => {
  //       // console.log("errItem = ", errItem);
  //       getAllErrors(errItem);
  //     });
  //   }
  // };

  const handleRowWiseErrors = (error, errorArray, prefix) => {
    // console.log("inside handleRowWiseErrors ", error);

    if (isNumber(error)) {
      console.log("per error = ", prefix + " " + String(error));
      return errorArray.push(prefix + " " + String(error));
    }

    if (isString(error)) {
      console.log("per error = ", prefix + " " + String(error));
      return errorArray.push(prefix + " " + error);
    }

    if (isKeyValuePairObject(error)) {
      for (let key in error) {
        handleRowWiseErrors(
          error[key],
          errorArray,
          (prefix = `${prefix} ${key}`)
        );
      }
    }

    if (isArray(error)) {
      error.map((errorItem) => {
        handleRowWiseErrors(errorItem, errorArray, prefix);
      });
    }
  };

  const handleAllErrors = (error, errorArray) => {
    // console.log("error = ", error);

    error.map((errorItem) => {
      if (errorItem?.row) {
        // console.log("errorItem row = ", errorItem);
        return handleRowWiseErrors(
          errorItem.errors,
          errorArray,
          `In row ${errorItem.row},`
        );
      }

      if (errorItem?.type) {
        console.log("errorItem msg = ", errorItem.msg);
        return errorArray.push(errorItem.msg);
      }

      return console.log("Unhadled Error", error);
    });
  };

  handleAllErrors(input1, errorArray);
  handleAllErrors(input2, errorArray);
  console.log("errorArray = ", errorArray);

  return <div>yuu</div>;
}

export default RowWiseError;
