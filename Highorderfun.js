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

// //=================
// let data =20;
// Number.prototype.customFun=function(x){
//     return x(this)
// }
// let result =data.customFun((x)=>{
//     return x*10;
// })
// console.log(result) 

//==============================
function add(a,b){
    return a+b;
}
function power(a,b){
    return Math.pow(a,b);
}
function operation(a,b, fn){
    let result =fn(a,b);
    console.log(result);
}
operation(5,4, add)
operation(2,3,power)