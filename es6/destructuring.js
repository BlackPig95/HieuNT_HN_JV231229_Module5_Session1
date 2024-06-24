//Array
const colors = [ "red", "green", "blue" ];
console.log(colors[ 1 ]);
console.log(colors[ 2 ]);
//Tên biến phải theo thứ tự index
const [ firstColor, secondColor, thirdColor, fourthColor ] = colors;
console.log("First " + firstColor);
console.log("Second", secondColor);
console.log("Fourth", fourthColor);

//Object
const myInfo = {
    id: 1,
    userName: "Nguyễn Văn A",
    age: 12,
};
console.log("Normal", myInfo.id);
//Tên biến phải trùng tên key
const { age, id, userName } = myInfo;
console.log("Destructuring", id);

