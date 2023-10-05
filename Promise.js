// const ticket =new Promise(function(resolve, reject)  {
//      const isBoard =false;
//      if(isBoard){
//         resolve("you are not the flight");
//      }else{
//         reject("your flight has been cancelled")
//      }
// });
// ticket
// .then((data)=>{
//     console.log("Oh my god ",data)
// })
// .catch((data)=>{
//     console.log("Oh No ,",data)
// })
// .finally(()=>{
//     console.log("i will always be excuted")
// });

//=====================================

// function getCheese() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cheese = "Bread";
//       resolve(cheese);
//     }, 2000);
//   });
// }

// function makeDough(cheese) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dough = cheese + "dough";
//        resolve(dough)
//       //reject("error show");
//     }, 2000);
//   });
// }

// function bakePijja(dough) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pizza = dough + "pizza";
//       resolve(pizza);
//     }, 2000);
//   });
// }
// getCheese()
//   .then((cheese) => {
//     console.log("here is the cheese", cheese);
//     return makeDough(cheese);
//   })

//   .then((dough) => {
//     console.log("here is the dough", dough);
//     return bakePijja(dough);
//   })
//   .then((pizza) => {
//     console.log("here is the cheese", pizza);
//   })
//   .catch((data) => {
//     console.log("error occured", data);
//   })
//   .finally(() => {
//     console.log("process ending ");
//   });

// or

// async function orderPizza(){
//     try{
//     const cheese =await getCheese();
//     console.log("here is the cheese",cheese);

//     const dough =await makeDough(cheese);
//     console.log("here is the dough",dough);

//     const pizza =await bakePijja(dough);
//     console.log("here the pijja" ,pizza);
//     } catch(err){
//         console.log(err);
//     }
// }
// orderPizza();

//======================================

