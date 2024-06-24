//Array
const array1 = [ 1, 2, 3, 4 ];
const array2 = [ 5, 6, 7, 8 ];
const arrayCopy = [ ...array1 ];
// const array3 = array1.concat(array2);
const array3 = [ ...array1, ...array2 ];
// const array4 = array1.concat(array2).concat(array3);
const array4 = [ ...array1, ...array2, ...array3 ];
console.log(array3);
console.log(array4);

//Object
const myInfo =
{
    id: 1,
    userName: "Nguyễn Văn A"
};
const myAge = {
    age: 12,
};
const newMyInfo = { ...myInfo, ...myAge };
console.log(newMyInfo);