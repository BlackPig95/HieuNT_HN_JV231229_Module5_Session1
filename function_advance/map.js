//Lặp qua các phần tử của mảng, trả về một mảng mới có số lượng phần tử bằng với số lượng
//phần tử của mảng cũ nhưng đã được chỉnh sửa 
const numbers = [ 1, 2, 3, 4, 5, 2, 2, 3 ];
const newNumbers = numbers.map(number =>
{
    return `
    <h1>${ number }</h1>
    `;
}
);
console.log(newNumbers);