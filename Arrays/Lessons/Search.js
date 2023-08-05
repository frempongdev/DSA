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
