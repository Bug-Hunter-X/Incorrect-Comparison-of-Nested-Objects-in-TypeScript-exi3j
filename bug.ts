function compareObjects(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (!obj1 && !obj2) {
    return true;
  }

  // Check if one object is null or undefined
  if (!obj1 || !obj2) {
    return false;
  }

  // Check if objects have different number of keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if values of keys are different
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: 2, c: { d: 3 } };
const obj2 = { a: 1, b: 2, c: { d: 3 } };
console.log(compareObjects(obj1, obj2)); // true

const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, b: 2, c: 3 };
console.log(compareObjects(obj3, obj4)); // false

const obj5 = { a: 1, b: 2, c: { d: 3 } };
const obj6 = { a: 1, b: 2, c: { d: 4 } };
console.log(compareObjects(obj5, obj6)); // false