function deepEquals(value1, value2) {
  // Check if values have different types
  if (typeof value1 !== typeof value2) return false;

  // Handle NaN (NaN is the only value not equal to itself)
  if (typeof value1 === "number" && isNaN(value1) && isNaN(value2)) return true;

  // Check for null and undefined equality
  if (value1 === null || value1 === undefined || value2 === null || value2 === undefined) {
    return value1 === value2;
  }

  // Handle primitives and functions (not part of this problem)
  if (typeof value1 !== "object") return value1 === value2;

  // Handle arrays
  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length !== value2.length) return false;

    // Check each entry for deep equality
    for (let i = 0; i < value1.length; i++) {
      if (!deepEquals(value1[i], value2[i])) return false;
    }
    return true;
  }

  // If one is array and the other is not, they are not equal
  if (Array.isArray(value1) !== Array.isArray(value2)) return false;

  // Handle objects
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  // Check if objects have the same number of keys
  if (keys1.length !== keys2.length) return false;

  // Check if all keys and their values are deeply equal
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEquals(value1[key], value2[key])) {
      return false;
    }
  }
  return true;
}

module.exports=deepEquals;
