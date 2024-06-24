const users =
    [
        {
            id: 1,
            name: "A",
            age: 21,
        },
        {
            id: 2,
            name: "B",
            age: 22,
        },
        {
            id: 3,
            name: "C",
            age: 35,
        },
        {
            id: 4,
            name: "A",
            age: 17,
        }
    ];
// const filterUser = (users, value) =>
// {
//     const arr = [];
//     for (let i = 0; i < users.length; i++)
//     {
//         if (users[ i ].name === value)
//         {
//             arr.push(users[ i ].name);
//         }
//     }
//     return arr;
// };
// console.log(filterUser(users, "C"));
const filterUser = users.filter(user =>
{
    return user.name === "A";
}
);
console.log(filterUser);
