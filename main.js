// 1 masala
// let array = [10, 1, 3, 5, 8, 9];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (array[j] > array[j + 1]) {
//       let sum = array[j + 1]
//       array[j + 1] = array[j]  
//       array[j] = sum;
//     }
//   }
// }

// console.log(array);



// 2 masala
// let loginobyekt1 = {
  //   login: 'forever',
  //   parol: '123'
  // }
  // if (loginobyekt1.parol.length < 8) {
  //   console.log('Parol 8 belgidan iborat bolishi kerak');
  // }
  // __________________________________________________________________________

// let loginobyekt2 = {
//   login: 'uz',
//   parol: '123'
// }
// if (loginobyekt2.login.length < 3 && loginobyekt2.parol.length < 8) {
//   console.log('Login kamida uchta belgidan iborat bolishi kerak, Parol kamida 8 ta belgidan iborat bolishi kerak');
// }
// _______________________________________________________________________________________________________

// let loginobyekt3 = {
//   login: 'forever',
//   parol: 'forever123'
// }
// if (loginobyekt3.login.length > 3 && loginobyekt3.parol.length > 8) {
//   console.log('Siz muvaffaqiyatli royxatdan otdingiz');
//   console.log(loginobyekt3);
// }
// ____________________________________________________________________________________________________________

// 4 masala
// let n = 10;
// let k = 2;
// let result = 0;

// for(let i = 1; i <= n; i++){
//   if(i > 1){
//     let pow = 1;
//     for(let j = 0; j < k; j++){
//       pow *= i;
//     }
//     result += pow;
//   } else if(i == 1){
//     result += i;
//   }
// }

// console.log(result);

// 6 masala

// const array = [7,5,3,2]
// const half = Math.ceil(array.length / 2);    

// const firstHalf = array.splice(0, half)
// const secondHalf = array.splice(-half)
// let sum1 = firstHalf[0];
// let sum2 = secondHalf[0]
// secondHalf[0] = sum1
// firstHalf[0] = sum2
// array.push(firstHalf,secondHalf)
// console.log(array);

