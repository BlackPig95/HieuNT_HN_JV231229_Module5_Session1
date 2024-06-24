//Trả về phần tử đầu tiên tìm thấy
//Ứng dụng trong trường hợp tìm kiếm và trả về một kết quả duy nhất
const numbers = [ 1, 2, 3, 4, 5 ];
// const find = (array, value) =>
// {
//     for (let i = 0; i < array.length; i++)
//     {
//         if (array[ i ] === value)
//         {
//             return i;
//         }
//     }
//     return null;
// };
// console.log(find(numbers, 3));
const find = numbers.find((number) =>
{
    return number === 3;
});
console.log(find);