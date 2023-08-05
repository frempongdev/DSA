const array = [1, 2, 3, 4, 5];

// linear searching -> go through all elements o(n)
//find 4 from the array and return its index

const linearSearch = (arr, target) => {
  let foundNum;
  let foundIndex;
  array.forEach((element, indx) => {
    if(element === target){
      foundNum = element
      foundIndex = indx
    }
  })
  if(!foundNum){
    return target + ' was not found'
  }
  return 'We found ' + foundNum + ' at index ' + foundIndex
}

console.log(linearSearch(array, 3))

//
console.log('----------------------------------')
//

// Binary Search
// divide the chucnk into two using midpoint/pivot
// check if target is greater than if so discard left
// repeat until you find the target.

const binarySearch = (arr, target) => {
  let sortedArr = arr.sort((a,b) => a - b)
  console.log(sortedArr)

  let left = 0;
  let right = sortedArr.length - 1;

  while(left<=right){
  let mid = Math.floor((left + right)/2);
    if(target === sortedArr[mid]){
      return `${sortedArr[mid]} is at index ${mid}`
    } else if(target > sortedArr[mid]){
      left = mid + 1
    } else right = mid -1
    
  }
  return `${target} is not found in the array`;
}

console.log(binarySearch([1, 4, 8, 2, 9, 5, 3], 10))
