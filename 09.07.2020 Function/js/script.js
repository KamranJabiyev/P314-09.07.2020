"use strict";
// getCredit()
// var name="Kamran";
// if(true){
//     console.log(name);
//     var name="Sunal";

// }
// console.log(name);

//FUNCTION - reusable code block

// function getCredit(credit, month = 1) {
//     // let credit = 603;
//     // let month = 4;

//     let part = credit % month;
//     let payment = (credit - part) / month;
//     // return;
//     for (var i = 1; i < month; i++) {
//         console.log(`${i}-ci ay odenish ${payment}`)
//     }
//     console.log(`${i}-ci ay odenish ${payment + part}`)
// }

// getCredit(603,4)
// console.log("-------------")
// getCredit(1000,3)
// console.log("-------------")
// getCredit(800,7)

// getCredit(900,4)
// getCredit();

// function Sum() {
//     // console.log(arguments)
//     let result = 0;
//     for (const item of arguments) {
//         if (!isNaN(item))
//             result += item;
//     }
//     return result;
// }

// console.log(Sum(10, 20, 30, 70, 78, 40, "kamran", true))

// function GetPi(){
//     return 3.14;
// }

//ARROW function(lambda expression)
// const GetPi = () => 3.14;
// console.log(GetPi())
// const ShowNumber = n =>console.log(n)
// ShowNumber(5)
// const Total = (n, m) => n + m;
// console.log(Total(5,6))

// const Example = (n, m) => {
//     let diff = n - m;
//     let sum = n + m;
//     return sum + diff;
// }
// console.log(Example(5, 6))

let stu=["Seynur","Sunal","Osman"]
// stu.pop()
// stu.pop()
// stu.push("Kamil")
// stu.shift()
// stu.unshift("Javidan")
// stu[0]="Elovset"
console.log(stu)