function getName(myName)
{
    return myName;
}

const getStatus = (status) =>
{
    console.log(status);//Không trả về giá trị
    return 1; //=> Nếu có trả về thì ở dưới sẽ nhận được giá trị trả về
};
console.log(getStatus("Active"));//Sau khi gọi hàm thì trả về undefined => console.log ra undefined

//Arrow function khác với function thường:
//+Không có ngữ cảnh (không có this)
//+Không có hoisting