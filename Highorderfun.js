// High Order Function ----------------------------------------

// function test(){
//     return 2+5
// }
// function hello(x){
//     let data =function(){
//         return "hof"
//     }
//     return data
// }
// hello(test)

//=========================
// let data =[9,8,7,4];

// let result=data.map((item)=>{
//     return 5*item;
// })

// //    or

// // let x =(item)=>{
// //     return 10*item;
// // }
// // let result =data.map(x);

// console.log(result)

//==========================
// let data =20;
// Number.prototype.customFun=function(x){
//     return x(this)
// }
// let result =data.customFun((x)=>{
//     return x*10;
// })
// console.log(result)

//==============================
// function add(a,b){
//     return a+b;
// }
// function power(a,b){
//     return Math.pow(a,b);          // 9 // 8
// }
// function operation(a,b, fn){
//     let result =fn(a,b);
//     console.log(result);
// }
// operation(5,4, add)
// operation(2,3,power)

// //=============================

// const radios =[4,8,7,6];
// const area =function(radios){
//     return Math.PI*radios*radios;
// };

// const calculate =function(radios,logic){
//     const output=[];
//     for(let i=0; i<radios.length; i++){
//         output.push(logic(radios[1]));
//     }
//     return output;
// }
// console.log(calculate(radios,area));

// const calculationArea= function(radios){
//     const output =[];
//     for(let i=0; i<radios.length; i++){
//         output.push(Math.PI*radios[i]*radios[i]);
//     }
//     return output;
// };
// console.log(calculationArea(radios))


//================================[[[[[[]]]]]]=======================================

//  H-O-F =>      forEach //filter //Map //sort //reduce

//========================forEach()=============================
// var companies = [
//   { name: "google", category: "service based", start: "1981" },
//   { name: "Amezon", category: "product based", start: "2003" },
//   { name: "paytm", category: "product based", start: "2006" },
// ];

// companies.forEach(function (companies, index) {
//   console.log(companies);
// });

// ========or==============

// companies.forEach((company,index)=>(console.log(company.start)))

//=============================sort()===============================

//  const sorted =companies.sort(function(b1,b2){
//      if(b1.start>b2.start){
//         return 1;
//      }else{
//         return -1;
//      }
//  })
//  console.log(sorted)

//=========or==========

// const sorted =companies.sort((b1,b2)=> (b1.start<b2.start ? 1 : -1));
// console.log(sorted);





