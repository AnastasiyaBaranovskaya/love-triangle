/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var love = 0;
  preferences.unshift(0);
  for (var i = 1; i < preferences.length; i++){
    for (var j = i; j <= preferences.length; j++){
      for (var k = i; k < preferences.length; k++){
        if (j == preferences[i] && k == preferences[j] && preferences[k] == i) { 
          love += 1;
        };
      };
    };
  };
  return love;
};
module.exports[2,3,1]
