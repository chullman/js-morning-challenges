
function genCharArray(charA, charZ) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
  }
  return a;
}


function findMissingLetter(array)
{
  let lowercaseChars = genCharArray('a', 'z');
  let uppercaseChars = genCharArray('A', 'Z');

  let firstLetter = array[0];

  let foundLetter = "";
  let hasFoundLetter = false;

  if (lowercaseChars.includes(firstLetter)) {
    
    let indexOfFirstLetter = lowercaseChars.indexOf(firstLetter);
    let counter = 0;
    array.forEach((letter) => {
      
      if ((lowercaseChars[indexOfFirstLetter + counter] != letter) && (hasFoundLetter == false)) {
        console.log(lowercaseChars[indexOfFirstLetter + counter]);
        foundLetter = lowercaseChars[indexOfFirstLetter + counter];
        hasFoundLetter = true;
      }
      counter++;
    })

  } else if (uppercaseChars.includes(firstLetter)) {
    let indexOfFirstLetter = uppercaseChars.indexOf(firstLetter);
    let counter = 0;
    array.forEach((letter) => {
      if ((uppercaseChars[indexOfFirstLetter + counter] != letter) && (hasFoundLetter == false)) {
        console.log(uppercaseChars[indexOfFirstLetter + counter]);
        foundLetter = uppercaseChars[indexOfFirstLetter + counter];
        hasFoundLetter = true;
        
      }
      counter++;
    })
  }

  return foundLetter;

}

//findMissingLetter(['a','b','c','d','f']);
//findMissingLetter(['O','Q','R','S']);


 const assert = require('assert');


describe("KataTests", function(){
   it("exampleTests", function(){
    assert.equal(findMissingLetter(['a','b','c','d','f']), 'e');
    assert.equal(findMissingLetter(['O','Q','R','S']), 'P');
  });
});