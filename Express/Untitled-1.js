// console.log("1");

//  async function  sleep(ms){

//     const timeNow = Date.now();
//     // console.log("sleeping", timeNow);
//     let i = 0
//     while(Date.now() - timeNow < ms){
//         i++
//     }
//     console.log("sleep", i );
// }
// (async()=>{
//     console.log("2");
//     await Promise.resolve()
//     await sleep(1000);
//     console.log("3");
// })();
// setTimeout(()=>{
//     console.log("5");
// },700)
// setTimeout(()=>{
//     console.log("6");
// },0)
// console.log("4");


// console.log('1');

// async function asyncFunc() {
//   console.log('2');
//   await Promise.resolve();
//   console.log('3');
// }


// asyncFunc();
// console.log('4');


function fib(n){
  if (n == 0) return n;
  if (n==1) return n;
  
  return fib(n-2)+fib(n-1)
}
