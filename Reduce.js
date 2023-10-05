// let numTo = [8, 9, 7, 4];
// const x = numTo.reduce(function(acc, curr){
//   acc= acc + curr;
//   return acc;
// })
// console.log(x);

//=====================================
//const ages =[35,15,48,33,58,22,86,24,45];
//    let total =0;
//    for(let i=0; i<ages.length; i++){
//     total= total+ages[i];
//    }
//    console.log(total);

//============or=========
// const ages =[35,15,48,33,58,22,86,24,45];
// const sumage =ages.reduce(function(total,age){
//     return total+age;
// },0)
// console.log(sumage);

//==============or==========
// const sumage2 = ages.reduce((total,age)=> total+age ,0);
// console.log(sumage2);
//======================================

// let numThree=[8,4,2,3,7]
//  let num =numThree.reduce((max,curr)=>{
//   if(curr > max){
//   max = curr;
//   }
//   return max
// },0)
// console.log(num);

//=======================================

// const users = [
//   { fName: "akshay", lName: "tiwari", age: 18 },
//   { fName: "akshay", lName: "tiwari", age: 24 },
//   { fName: "akshay", lName: "tiwari", age: 24 },
//   { fName: "akshay", lName: "tiwari", age: 24 },
//   { fName: "akash", lName: "mishra", age: 26 },
//   { fName: "suraj", lName: "srivstav", age: 21 },
//   { fName: "sani", lName: "pandey", age: 22 },
// ];

// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(output);

// //=====================================
// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 },
//   ];

//   const names = people.reduce((accumulator, person) => [...accumulator, person.name], []);
//   console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

// //=================================

// const fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// const fruitCount = fruits.reduce((accumulator, fruit) => {
//   accumulator[fruit] = (accumulator[fruit] || 0) + 1;
//   return accumulator;
// }, {});
// console.log(fruitCount); // Output: { apple: 3, banana: 2, cherry: 1 }

//====================================

// const shopingCart = [
//   {
//     itemName: "python",
//     price: 2450
//   },
//   {
//     itemName: "javascript",
//     price: 2000
//   },
//   {
//     itemName: "node js",
//     price: 2450
//   },
//   {
//     itemName: "mongo Db",
//     price: 2450
//   },
// ];
// const shoping = shopingCart.reduce((acc, item) => {
//   return acc + item.price;
// }, 0);
// console.log(shoping);

//  const sem =shopingCart.filter((item)=>{
//     return item.itemName ==="python"
// })
// console.log(sem);

//  let add =shopingCart.map((amt)=>{
//     return amt.price +500 
// })
// console.log(add);

//===========================================

// const greeting ="helo word";
// for (const char of greeting){
//     console.log(char);
// }
