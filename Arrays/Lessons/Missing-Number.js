// Given an array *nums* containing *n* distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// **Example 1**
// Input: nums = [3,0,1]
// Output: 2

// sort array
// loop through and check if the elements have a difference of 1
// if the it does not, return the diference between the two elements checked


const missingNumber = (arr) => {
  let sortedArr = arr.sort((a,b) => a-b)
  let missing;

  for (let index = 0; index < sortedArr.length; index++){
    if(sortedArr[index + 1] - sortedArr[index] !== 1 ){
      missing = sortedArr[index] + 1
      return missing;
    }
  }
}

console.log(missingNumber([4,2,1]))
