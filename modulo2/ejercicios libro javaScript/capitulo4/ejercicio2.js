
function reverseArray(array) {
    const reversedArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArr.push(array[i]);
    }
    return reversedArr;
  }
  
 
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      const temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }
  const array_original = [1, 2, 3, 4, 5];
  const array_inverso = reverseArray(array_original);
  console.log('Array original:', array_original);
  console.log('Array invertido:', array_inverso);
 