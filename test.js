const arr1 = [1,2]
const arr2 = arr1

const set = new Set()
const set1 = new Set()
// set.add(arr1)
// set.add(arr2)
// console.log(set);

const edge = "az"
const edge1 = "az"
set.add(edge)
set1.add([edge])
console.log(set);
console.log(set1);


const test = new Set(edge)
const test1 = new Set([edge])
test1.add(edge1)
console.log(test,test1);

const r = 3
const s = 4
const post = r+','+s
console.log(post);
console.log(typeof post);