const obj1 = {
    x: 10
}
const obj2 = Object.create(obj1)
console.log(obj2.x)
// console.log(obj1.create('x'))
// console.log(obj1.create({x:10}))
// console.log(Object.create(obj1))
