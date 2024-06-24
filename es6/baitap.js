//Bai 1:
// Sử dụng từ khóa let để khai báo biến i chạy trong vòng lặp for, cho i tăng từ 0 đến 5 và in i trong vòng lặp. 
// In biến i ngoài vòng lặp để kiểm tra và kết luận về phạm vi hoạt động của biến được khai báo bằng từ khóa let.
const bai1 = () =>
{
    for (let i = 0; i < 5; i++)
    {
        console.log(i);
    }
    console.log(i);
};
// bai1();

//Bai 2
// Khai báo hai biến bằng từ khóa const, một số nguyên và một mảng bất kỳ
// Với biến số nguyên thực hiện gán lại biến thành một giá trị khác
// Với mảng thì tiến hành thêm một phần tử vào trong mảng
// Chạy code, kiểm tra và giải thích kết quả trả về
const bien2 = 5;
const array2 = [ 2, 5, 61 ];
// bien2 = 6;
array2[ 3 ] = 5;
console.log(bien2);
console.log(array2);

//Bai 3
// Tạo một mảng đặt tên là students chứa  các đối tượng sinh viên, mỗi sinh viên gồm các thông tin bao gồm id và name. 
// Sử dụng hàm nâng cao, tiến hành duyệt qua tất cả các sinh viên trong mảng và in lời chào với mỗi sinh viên.
const students = [
    {
        id: 1,
        name: "Sinh vien 1",
    },
    {
        id: 2,
        name: "Sinh vien 2",
    },
    {
        id: 3,
        name: "Sinh vien 3",
    },
    {
        id: 4,
        name: "Sinh vien 4",
    }
];
students.forEach(s => console.log(s.id, s.name));
//Bai 4
// Sử dụng arrow function để xây dựng một hàm tính tổng đơn giản. Hàm có hai tham số truyền vào là a và b 
// Xử lý logic và in ra tổng của 2 số truyền vào.
const sum = (a, b) =>
{
    return console.log(a + b);
};
// //Bai 5
// Sử dụng toán tử Rest để xây dựng hàm có số lượng tham số không xác định.
// Khi gọi hàm có thể truyền vào số lượng đối số bất kỳ và in ra tổng của các giá trị truyền vào hàm
const sumRest = (...arr) =>
{
    return arr.reduce((initial, acc) => initial + acc);
};
console.log(sumRest(1, 2, 3, 4, 6, 7, 8, 9));
//Bai 6
// Khai báo một mảng các số nguyên. Ví dụ: const numbers = [1, 2, 3, 4, 5]
// Sử dụng toán tử spread để copy mảng đã khai báo và đồng thời thêm một biến đã khai báo vào mảng mới này.
// In mảng mới này ra console để kiểm tra xem kết quả
const numbers6 = [ 1, 2, 23, 536, 46 ];
const newNumber = 99;
const newArray6 = [ ...numbers6, newNumber ];
console.log(newArray6);
//Bai 7
// Xây dựng hàm có tham số là các mảng có độ dài bằng nhau, số lượng tham số là không xác định. 
// Hàm có tác dụng đưa các phần tử có cùng chỉ số vào chung mảng. Kết quả trả về là mảng chứa các mảng phần tử có cùng chỉ số.
const bai7 = (...[ a, b, c ]) =>
{

};

