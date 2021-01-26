const a1 = [1,2,3];
const a2 = [4,5,6];

//concatenar array

//const a3 = a1.concat(a2,[7,8,9,10], 'Gustavo');
//console.log(a3);

//outra maneira para concatenar array é o spread operator
const a3 = [...a1, ...a2, 'Gustavo', ...[7,8,9]];
console.log(a3);