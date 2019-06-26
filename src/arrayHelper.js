function flattenArray(arr) {
  let res = [];
  if (arr) {
    arr.forEach(item => {
      if (isArray(item)) {
        res = res.concat(flattenArray(item));
      } else {
        res.push(item);
      }
    });
  }
  return res;
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

export { flattenArray };
