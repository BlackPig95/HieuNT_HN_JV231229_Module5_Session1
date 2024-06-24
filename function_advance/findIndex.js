const numbers = [ 1, 2, 3, 4, 5, 2, 2, 3 ];
// const findIndex = (array, value) =>
// {
//     for (let i = 0; i < array.length; i++)
//     {
//         if (array[ i ] === value)
//         {
//             return i;
//         }
//     }
//     return -1;
// };
// console.log(findIndex(numbers, 3));


// const findIndex = numbers.findIndex(number =>
// {
//     return number === 3;
// });
const findIndex = numbers.findIndex(number => number === 3);
console.log(findIndex);
