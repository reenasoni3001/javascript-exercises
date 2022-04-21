const removeFromArray = function (array, ...valuesToRemove) {
  return array.filter(function (item) {
    return valuesToRemove.indexOf(item) === -1;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
