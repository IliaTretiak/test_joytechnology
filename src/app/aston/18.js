const map = new Map();

map.set('0', '1');
map.set('s2', '2s');
map.set('3s', 's3');

const arr = [...map.values()];
const result = arr.map(value => parseInt(value, 10));

console.log(result)

// [1, 2, NaN]