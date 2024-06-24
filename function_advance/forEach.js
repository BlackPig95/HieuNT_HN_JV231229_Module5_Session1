//forEach dùng để duyệt qua các phần tử của mảng
//Tham số truyền vào cho callback function gồm phần tử của mảng, index và mảng nó lặp qua
const numbers = [ 1, 2, 3, 4, 5 ];
// for (let i = 0; i < numbers.length; i++)
// {
//     console.log(numbers[ i ]);
// }
// numbers.forEach(i => console.log(i));
numbers.forEach((number, index, array) =>
{
    console.log("Number", number);
    console.log("Index", index);
    console.log("Array", array);
});