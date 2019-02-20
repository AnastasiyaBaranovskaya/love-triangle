/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var number = 0;
  var j = 0;
  while (j < preferences.length){
    var i = preferences.splice(0, 3);
    if (i[1] - i[0] == 1 && i[0] - i[2] == 1){
      number += 1;
    };
  };
  return number;
};
module.exports[2,3,1]
