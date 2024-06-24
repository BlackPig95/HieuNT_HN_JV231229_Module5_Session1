//var
var userName = "Nguyễn Văn A";
console.log("Username " + userName);
userName = "Nguyễn Văn B";
console.log("Username " + userName);
var userName = "Nguyễn Văn C";

console.log("Age " + age);
var age = 10;

var address;
console.log("Address " + address);
//Hoisting: Khi file .js chạy sẽ quét hết các biến được khai báo (declaration phase), những biến khai báo với từ khóa var sẽ được
//đưa lên đầu => Có thể truy cập. Nhưng giá trị của biến khi đó là undefined trước khi được khởi tạo
//Declaration => Initialization => Assignment
//Hoisting = Declaration + Initialization phase 
//var:
//+Có thể khai báo lại
//+Có thể gán lại
//+Hoisting
//+Phạm vi global 

//let
let gender = "Nam";
// let gender = "Nu";
console.log("Gender " + gender);
gender = "Nu";
console.log("Gender " + gender);
//let 
//+Có thể gán lại
//+Không thể khai báo lại

//const
const PI = Math.PI;
// const PI = 3.14;
// PI = 3.15;//TypeError: Assignment to constant variable.
console.log("PI " + PI);
//const
//+Không thể khai báo và gán lại giá trị

//Temporal dead zone: Var không có TDZ
//Let, const vẫn có hoisting nhưng giá trị sẽ được đưa vào TDZ
//=> Cố gắng sử dụng biến trước khi khởi tạo sẽ báo lỗi