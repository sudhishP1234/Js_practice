//  const thapa ={
//   name:"sudhish",
//   lastName:"pandey",
//   sum:function(){
//     var add = 2+5;
//     console.log("the sum two no ."+add);
//     console.log(this)
//   }
//  }
//  thapa.sum();

//====================  variable ek function scope hota hai jo v  var declatre krte hai use hme function ke andar define krna padta hai
// var userName="rakesh";
// function mainFun(){
//   //if(true){  => if jo hota hai non blocking hota hai isliye variable assighn ho gya => mukesh
//   var userName ="mukesh";
//   //console.log(userName);
// }
// //mainFun()
// console.log(userName);

//========================
// function sum (){
//let userName ="sumit"
//console.log(this.userName); //=> undefine
// console.log(this);
// }
// sum()
// console.log(this);

//=================================

// let num =()=>{
//   let userName ="sudhish"
//   console.log(this.userName);
// }
// num()

// =================================

// let workername = [
//   {
//     Name: "sumit",
//     age: 25
//   },
//   {
//     Name: "sam",
//     age: 26
//   }
// ]

// function sum() {
//   return `${this.Name}.${this.age}`
// }

