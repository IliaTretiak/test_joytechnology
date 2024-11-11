const obj = {
    x: 10,
    y: 20,
    z: 30
}

//const result = obj.values()
//const result = Object.values(obj)
//const result = Object.values(obj, 'x', 'y', 'z')
const result = obj.values('x', 'y', 'z')

console.log(result)

