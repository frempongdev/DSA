let a = [4,5,6,7,8,9,0,6,3]
let b = [1,3,6,7,6,2,7,9]
let arr = []

// loop through a and b ( nested loop)
// check if a elements are in b and not already in new array
// push results to new array

a.forEach(num => {
  b.forEach(n => {
    if(num===n && !arr.includes(num)){
      arr.push(num)
    }
  })
})
arr.sort((a,b)=> a - b)
console.log(arr)
