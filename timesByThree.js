const assert = require('assert');

function timesByThree(numList) {
  let count = [];
  for (let i = 0; i < numList.length; i++) {
    let answer = numList[i] * 3;
    count.push(answer);
  }
  return count;
}



describe('Times by three', () => {
  it('Is result multiplied by three?', () => {
    let result = timesByThree([1,2,3,4,5,6]);
    assert.deepEqual(result, [3,6,9,12,15,18]);
  })
  it('Can test for empty input', () => {
     let result = timesByThree([]);
     assert.deepEqual(result, []);
  })
})