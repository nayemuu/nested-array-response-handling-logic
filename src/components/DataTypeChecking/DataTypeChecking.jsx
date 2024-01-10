function DataTypeChecking() {
  let a = 1;
  // console.log('type of a = ', typeof a);

  let b = 'yoo';
  console.log('type of a = ', typeof b);

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

  console.log('is a number = ', isNumber(a));
  console.log('is a string = ', isString(a));

  return (
    <div>
      <p>yoo</p>
    </div>
  );
}

export default DataTypeChecking;
