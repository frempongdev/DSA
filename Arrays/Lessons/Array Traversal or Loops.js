const array = [1, 2, 3, 4, 5];

let elements = []
let oneElement = 0
let index;
let lastIndex = 'The last index is '

//loop using forEach and an index
array.forEach((element, indx)=>{
  element ++
  elements.push(element)
  oneElement += element
  console.log(indx)
  index = indx
})

lastIndex = lastIndex.concat(index.toString())



console.log(lastIndex)
console.log(elements)
console.log(oneElement)
