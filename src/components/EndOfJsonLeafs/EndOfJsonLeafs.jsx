import React, { useEffect, useState } from 'react';

let input1 = {
  key1: {
    key2: 2,
    key3: 'this is error 1',
    key4: {
      key5: 'this is error 2',
      key6: {
        key7: 'this is error 3',
        key8: 'this is error 4',
      },
    },
  },
  key9: 'this is error 5',
};

const isNumber = (num) => {
  if (typeof num === 'number') {
    return true;
  } else {
    return false;
  }
};

const isString = (str) => {
  if (typeof str === 'string') {
    return true;
  } else {
    return false;
  }
};

function isKeyValuePairObject(obj) {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.keys(obj).length > 0
  );
}

function EndOfJsonLeafs() {
  const [errorArray, setErrorArry] = useState([]);
  let arr = [];

  const getAllErrors = (err) => {
    if (isNumber(err)) {
      arr = [...arr, err];
      return 0;
    }

    if (isString(err)) {
      arr = [...arr, err];
      return 0;
    }

    if (isKeyValuePairObject(err)) {
      for (let key in err) {
        getAllErrors(err[key]);
      }
    }
  };

  getAllErrors(input1);
  console.log('Errors = ', arr);

  return <div>yoo</div>;
}

export default EndOfJsonLeafs;
