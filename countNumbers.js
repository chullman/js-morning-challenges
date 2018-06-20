function countNumbers(array) {
  let results = {};
  array.forEach(element => {
    if (Number.isInteger(element)){results[element] ? results[element] += 1 : results[element] = 1 }
  });
  return results;
}


const assert = require('assert');

describe('Count numbers', () => {
  it('Count numbers', () => {
    let array = [1,1,2,2,3];
    let obj = {"1": 2, "2": 2, "3": 1};
    let result = countNumbers(array);
    assert.deepEqual(result, obj);
  })
  it('Count only numbers', () => {
    let array = [1,1,2,2,3, "dog", null];
    let obj = {1: 2, 2: 2, 3: 1};
    let result = countNumbers(array)
    assert.deepEqual(result, obj);
  })
})