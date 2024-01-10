function isKeyValuePairObject(obj) {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.keys(obj).length > 0
  );
}

function IterableChecking() {
  // Example usage:
  let keyValueObject = { key: 'value', anotherKey: 'anotherValue' };
  let array = [1, 2, 3];
  let emptyObject = {};
  let str = 'yoo';

  console.log(isKeyValuePairObject(keyValueObject)); // true
  console.log(isKeyValuePairObject(array)); // false
  console.log(isKeyValuePairObject(emptyObject)); // false
  console.log(isKeyValuePairObject(str)); // false

  return <div>yoo</div>;
}

export default IterableChecking;
