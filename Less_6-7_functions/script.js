//----Task 1_1--------

n = 3;
m = 2;

function fillArray(n, m) {

   A = new Array(n)

   for( i = 0; i<A.length; i++ ) {
           A[i] = new Array(m);
       }
   
       for( i =0 ; i<A.length; i++) {
           for(j = 0; j<A[i].length; j++ ) {

               A[i][j] = Math.floor(Math.random()*90)+10;
               document.write(A[i][j] + ' ');
           }
           document.write('</br>');
       }
       return A;

}

Array = fillArray(n, m);

console.log(Array);


// //----Task 1_2------

// arr1 = [1,2,80, 'I hate Math'];
// arr2 = [1,'I really do hate Math', 8];
// sum = 0;

// function sumArray(arr1, arr2) {
//     var sum1 = 0;

//     for(i = 0; i < arr1.length; i++){
//         if(typeof arr1[i] == 'number'){
//         sum1 += arr1[i];
//         }
        
//     }

//     console.log('Sum of arr1 = ' + sum1)

//     var sum2 = 0;

//     for(i = 0; i < arr2.length; i++){
        
//         if(typeof arr2[i] == 'number'){
//             sum2 += arr2[i];
//         }
//     }
//     console.log('Sum of arr2 = ' + sum2)
    
// if (sum1 > sum2){
//         sum = console.log (arr1);
//     }else{
//         sum = console.log (arr2);
        
//     }

//     return sum;
// }

// res = sumArray(arr1, arr2);

// console.log(res);

    

// //----Task 2_1-----

// A = [1, 114, 7, 12, 2, 5];

// function removeCenter (arr){

// centerPos = arr.length / 2 - 1;

// if (arr.length % 2 == 0) {

//     arr.splice(centerPos, 2);

// } else {

//     arr.splice(centerPos, 1);

// }   

//     return arr;
// }

// arr = removeCenter (A);

// console.log (arr);


// //-----Task 2_2------

// // //---- Solving according(https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions)

// var calc = function doFunction(a, b){
    
//     return{
//             power:function(a, b){
//                 var result = a;
          
//             for (var i = 1; i < b; i++) {
//               result *= a;
//             }
          
//             return result;
//             }
//         }
// }

// var operations = calc();
// console.log(operations.power(2,3));


// //-----Task 2_2-4------

// //---- Solving according lection materials

// function doFunction(a, b){

//     return function(callback){
//         if (a, b && callback) {

//             return callback(a,b);

//         } if (a, b && !callback) {

//             return a, b;
//         }

//         if (arguments.length = 1 && typeof a == 'number'){
//             return callback(a);
//         }
//     }
// }

// function power(a, b){
//     var res = a;
//     for (var i = 1; i < b; i++) {
//               res *= a;}
//               return res;
// }

// function sum(a, b){
//     return a + b;
// }

// function mul(a, b){
//     return a * b;
// }

// function div(a, b){
//      return (a / b).toFixed(2);
// }

// function factorial(a) {
//     return (a != 1) ? a * factorial(a - 1) : 1;
//   }

// // function factorial (a){
// //     if(a != 1){
// //         return a * factorial (a - 1);
// //     }else{
// //         return 1;
// //     }
// // }


// var calc = doFunction(2, 3);
// console.log(calc(power));
// console.log(calc(sum));
// console.log(calc(mul));
// console.log(calc(div));

// var calc = doFunction(6);
// console.log(calc(factorial));














