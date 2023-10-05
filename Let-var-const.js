// ans => 6 ===================

// function addNumbersWithPromise(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (num1 < 0 || num2 < 0) {
//       reject("Both numbers must be non-negative");
//     } else {
//       const result = num1 + num2;
//       resolve(result);
//     }
//   });
// }
// addNumbersWithPromise(5, 3)
//   .then((result) => {
//     console.log("Sum:", result); 
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
//=======================================
// ans => 20 =================
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function fetchData() {
//   await delay(2000); 
//   return { data: 'Your resolved data goes here' };
// }

// async function main() {
//   try {
//     const result = await fetchData();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// main();

//==================================


// addNumbersWithPromise(-1, 3)
//   .then((result) => {
//     console.log("Sum:", result);
//   })
//   .catch((error) => {
//     console.error("Error:", error); 
//   });


// function example() {
//   let x = 10;
//   if (true) {
//     let y = 20;
//   }
//   console.log(x);
// }
// example()
//========================================
// let chr ="hello";
// let upper =chr.toUpperCase()
// console.log(upper);

//=========================================
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
// let apiCall = fetch (apiUrl)
// console.log(apiCall)
//===========================================

// const text ="hello, world! this  is a simple text .";
// let a =text.slice("", 4);
// console.log(a);
//============================================

// const myPromise = new Promise((resolve, reject) => {
//   console.log("Promise executor");
//   resolve("Resolved value");
//  });

//  myPromise
//   .then((result) => {
//     console.log("First .then(): " + result);
//     return "Value from first .then()";
//   })
//   .then((result) => {
//     console.log("Second .then(): " + result);
//     return "Value from second .then()";
//   });

//  console.log("After .then() chain");
//==========================================

//  for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
//  }
//============================
//  var a = 5;

// function hoistingExample() {
//  console.log(a);
//  var a = 10;
//  console.log(a);
// }

// hoistingExample();

// //=======================================
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
// ];

// const filteredPeople = people.filter(person => person.age >= 30);

// console.log(filteredPeople);

//=================================
//


//====================================

//   const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number, index, array) => {
//   if (index < array.length - 1) {
//     return number * 2;
//   }
//   return number;
// });

// console.log(doubledNumbers);
//=================================

//  let arr =[5,6,7,8,9];
//  function into(sum){
//   return sum*2;
//  }
//  let define =arr.map(into
//   )
//  console.log(define);

// //======================\
// var x = 5;
// let y = "10";
// let z = x + y;
// console.log(z);

//==============================
// let sam = { name: "John", age: 30 };
// let ref = sam;

// ref.name = "Alice"; // Modifying the object through the reference

// console.log(sam); // Output: { name: "Alice", age: 30 }
// console.log(ref); // Output: { name: "Alice", age: 30 }

//=======================================

// function a(){
//   // console.log(b)
//   function n(){
//     console.log(b);
//   }

//   var b =20;
//   n()
// }
// a();

//============================
// function a() {
//   c();
//   function c() {
//   var b = 100;
//   console.log(b); // 100
//   }
//  }
//  var b = 10;
//  a()
//=============================
// function a() {
//   var b = 10;
//   c();
//   function c() {
//   console.log(b); // 10
//   }
//  }
//  a();
//  console.log(b); // b is not define

//==================================
// var a = 100;
// {
//  var a = 10; // same name as global var
//  let b = 20;
//  const c = 30;
//  console.log(a); // 10
//  console.log(b); // 20
//  console.log(c); // 30
// }
// console.log(a)

//=======================================

// let b = 100;
// {
//  var a = 10;
//  let b = 20;
//  const c = 30;
//  console.log(b); // 20
//  //console.log(c);
// }
// console.log(b); //100

//=====================================
// function x() {
//   var a = 7;
//   function y() {
//   console.log(a);
//   }
//   return y;
//  }
//  var z = x();
//  console.log(z()); // value of z is entire code of function y.

//===============================
// function z() {
//   var b = 900;
//   function x() {
//   var a = 7;
//   function y() {
//   console.log(a, b);
//   }
//   y();
//   }
//   x();
//  }
//  z(); // 7 90
//=============================
// const c = 100;
// function x() {
//  const c = 10;
//  console.log(c); // 10
// }
// x();
// console.log(c); // 100

//================================
// let a = 20;
// function x() {
//  var a = 25;
// }
// console.log(a);
// //=============================
// function outest() {
//   var c = 20;
//   function outer(str) {
//   let a = 10;
//   function inner() {
//   console.log(a, c, str);
//   }
//   return inner;
//   }
//   return outer;
//  }
//  let a = 100;
//  outest()("Hello There")(); // 10 20 "Hello There"

//  //========================================
//  var b = function (param1) {
//   console.log(param1); // prints " f() {} "
//  };
//  b(function () {});
//  // Other way of doing the same thing:
//  var b = function (param1) {
//   console.log(param1);
//  };
//  function xyz() {}
//  b(xyz); // same thing as prev code
//  // we can return a function from a function:
//  var b = function (param1) {
//   return function () {};
//  };
//  console.log(b()); //we log the entire fun within b.
//===============================================

// const radius = [1, 2, 3, 4];
// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//   output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
//  };
//  console.log(calculateArea(radius));

// let Promise1=new Promise((resolve, reject) => {
//     if(false)
//     {
//         resolve ("every thing is poss")
//     }
//     else{
//         reject ("you r rejeect")
//     }
// })
// // Promise1.then((resu)=>{
//     console.log(resu);
//     return resu
// }).then((tt)=>{
//   console.log(`if u try ${tt}`);
// })
// .catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//   console.log("jfjf");
// })

// let r=async ()=>{
//   let b= await Promise1
//   console.log(b);

// }
// r()
// let x = "helo"
// x.toUpperCase
// console.log(x.toUpperCase());

//==================================
// const obj =new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log("resolve after 2 second");
//     resolve(56)
//   },1000)
// })
// obj.then((value)=>{

//   console.log(value);
//   let obj2 =new Promise((resolve, reject) => {
//     resolve("promide2")
//   })
//   return obj2
// }).then((value)=>{
//   console.log("we are chaining");
// })
// //==============================
// function example() {
//   let x = 10;
//   if (true) {
//      x = 20; // This creates a new variable x within this block.
//   }
//   console.log(x); // Outputs 10
// }

// example()

// //==================
// let nam = "sumit";
// function getName() {
//   console.log(nam);
// }
// getName();

// let c = {
//   name: "jack",
// };
// let d;
// d = c;
// d.name = "anil";
// console.log(d.name);

//===============================
function count(){
   let count = 0
  return function(){
    count++
    return count
  }
}
const increcount1 =count()
const increcount2  =count()
console.log(increcount1());
console.log(increcount2());
//===========================

var x = 5;
 function example() {
 console.log(x);
 var x = 10;
 console.log(x);
 }

 example();
console.log(x);





