// setTimeout(function(){
//   console.log("liner")
// },4000);

//  function x (y){
//   console.log("x"); 
//   y()
//  }
 
//  x(function y(){
//   console.log("y");
//  })

//========================
// const preLode =(friend ,callfrd)=>{
//   console.log(`i am busy Now ${friend}`);
//   callfrd()
// }
// const preLode2 =()=>{
//   console.log(`hey there whtasup`)
// }
// preLode("thapa",preLode2);

//======================
// calculate and sub arrow function value does not call and in value pass name
// const calculate =(a,b, operation)=>{
//     return operation(a,b);
// }
// const addition =calculate(5,6, function(num1,num2){
//     return num1+num2;
// })
// console.log(addition);

// const sub=(a,b)=> a-b;
// const subResult =calculate(9,8 ,sub);
// console.log(subResult);

// //=====================================
// function register(callback){
//     setTimeout (()=>{
//         console.log("ragister end");
//         callback()
//     },1000)  
// }
// function sendEmail(callback){
//     setTimeout (()=>{
//         console.log("email end");
//         callback()
//     },3000)  
// }
// function login(){
//     setTimeout (()=>{
//         console.log("login end");
//     },1000)  
// }
// function getUserdata(){
//     setTimeout (()=>{
//         console.log("getuserdata end");
//     },1000)  
// }
// function userData(){
//     setTimeout (()=>{
//         console.log("userdata end");
//     },1000)  
// }
// register(function (){
//     sendEmail(function (){
//         login()
//         getUserdata()
//         userData()
//     })
    
// })

// console.log("end application");

//====================================

// var a=()=>{
//     setTimeout(function(){
//         console.log("welcome");
//         b()
//     },1000);
//     const b=()=>{
//         console.log("happy");
//     }
// }

// a()

//=================================

const perOne=(name ,sayHi)=>{
    console.log(`i am busy ${name}`);
    sayHi()
}
const perTwo=()=>{
    console.log(`hey i there call back`);
}
perOne("sam",perTwo) 
