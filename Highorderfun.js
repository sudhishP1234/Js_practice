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

// const radios =[4,8,7,];
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

// =========================filter()==============================

// const ages =[33,25,48,33,58,22,26,24,45];
//  const age =ages.filter(function(age){
//     if(age>=35){
//    return true;
//     }
//  })
//  console.log(age);
//=========================

//  const ftr =companies.filter(function(company){
//   if(company.category==="service based"){
//     return true;
//   }
// })
// console.log(ftr);

//===========or==============
// const fltr =companies.filter(company=> company.category === "product based");
// console.log(fltr);

//======================
// const arr =[5,8,9,7,2];
// function isOdd(x){
//     return x % 2;
// }
// const output =arr.filter(isOdd);
// console.log(output);

// //======================
// const arr1 =[5,8,9,7,2];
// function isEven(x){
//     return x % 2===0;
// }
// const output1 =arr.filter(isEven);
// console.log(output1);

//===========================
// const arr =[5,8,9,7,2];
// function isGreaterthen(x){
//     return x < 7;
// }
// const output =arr.filter(isGreaterthen);
// console.log(output);

//============================map()================================

//   const dummy =companies.map((company,index)=>{
//       return `${company.name} ${company.category} ${company.start}`
//   })
//   console.log(dummy);

//================================

// const arr =[5,6,7,8,4];
// function double(x){
//     return x*2;
// }
// const output =arr.map(double)
// console.log(output);

// //===============================
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((number) => number ** 2);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//=================================
// const names = ["Alice", "Bob", "Charlie", "David"];
// const nameLengths = names.map(function(name) {  
//   return name.length;
// });                                      => Output: [5, 3, 7, 5]
// console.log(nameLengths); 



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

//==============================reduce()==============================

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



