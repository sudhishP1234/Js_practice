// function init(){
//     var name ="mozila";
//     function displayName(){
//         console.log(name);
//     }
//     // name="herry";
//     return displayName;
// }
// let c=init();
//  c()
//console.dir(c);

// =============================
//     function returnFunc(){
//     const x = () => {
//       let a = 20;
//       console.log(a);
//       const y = () => {
//        let a = 30;
//         console.log(a);
//         const z = () => {
//           let a = 40;
//           console.log(a); => 20,30,40
//         };
//         z()
//       };
//       a=222;
//       y()
//     };
//     return x;
// }
// let a =returnFunc()
// a();

//================================
// function returnFunc(){
//     const x = () => {
//       let a = 20;
//       console.log(a);
//       const y = () => {
//        let b = 30;
//         console.log(b);
//         const z = () => {
//           let c = 40;        => 20,30,40
//           console.log(c);
//         };
//         z()
//       };
//       a=222;
//       y()
//     };
//     return x;
// }
// let a =returnFunc()
// a();

// //================================
// var sum=function(a){
//     console.log("live server"+a);
//     var c=4;
//     return function(b){
//         return a+b+c;         => live server200
//     }                         => 209
// }
// var store =sum(200);
// console.log(store(5))

//===================================
//   let a =100;
//   function outest(){
//     var c =30;
//     function outer(b){
//       function inner(){
//         console.log(a,b,c);
//       }
//      // let a =10;
//       return inner;
//     }
//     return outer;
//   }
//  var close=(outest()) ("helloword");
//  close();

//======================================
// var sum =function(a,b,c){
//     return{
//         getSum1:function(){
//             return a+b;
//         },
//         getSum2:function(){
//             return a+b+c;
//         },
//         getSum3:function(){
//             return a+b+c;
//         }
//     }
// }
// var store =sum(5,4,8,6);
// console.log(store.getSum1());
// console.log(store.getSum2());
// console.log(store.getSum3());

// //=================================
// const outerFun=(a)=>{
//     let b=10;
//     const innerFun=()=>{
//         let sum =a+b;
//         console.log(`the sum of${sum} .`)
//         const thirdFun=()=>{
//             let sum1 =a+b;
//             console.log(`the sum1 of${sum1}.`)
//         }
//         thirdFun()
//     }
//     innerFun()
// }
// outerFun(5)

//===============================
//  function x(){
//     let a =7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
//  }
//  var z =x();
//  console.log(z)
//  z();

//===============================================================
// for(var i=1; i<=5; i++){
//     setTimeout(() =>{
//         console.log(i)
//     }, 1000);
// }
//============================
// const numRows = 3;
// // row
// for (let i = 0; i < numRows; i++) {
//   let stars = "";
//   // column
//   for (let j = numRows; j > i; j--) {
//     stars += "  *  ";
//   }

//   //console.log(stars);
//   setTimeout(() => {
//     console.log(stars);
//   }, i * 1000);
// }

//========================

// function outest() {
//   var c = 20;
//   function outer(str) {
//     let a = 10;
//     function inner() {
//       console.log(a, c, str);
//     }
//     return inner;
//   }
//   return outer;
// }
// outest()("hello")();
