// //-------- Task_1_Prime numbers------------

// A = [23,1,2,52,5,34,27,6,246,436];
// B = [];
// console.log (A);

// for (i = 0; i < A.length; i++){
   
    
//     for (j = 2, a = 1; j <=A[i]-1; j++){

//         if (A[i] % j == 0){
//             a = 0;
//             break;
//         }    
        
//     }
//     if(a != 0 && A[i] > 1){
//         B[B.length] = A[i];
//     }
// }

// console.log(B);




// // -----------Task_1_min/max--------------

// A = [23,1,2,52,5,34,27,6,246,436];

// min = max = A[0];

// for(i = 0; i < A.length; i++) {

//     if (A[i] < min) {
//         min = A[i];
//     }

//     if (A[i] > max) {
//         max = A[i];
//     }
// }

// console.log(A);
// console.log(min);
// console.log(max);



// -----------Task_2_numbers btween min/max--------------

// A = [23,1,2,52,5,34,27,6,246,436];
// B = [];

// min = max = A[0];
// minPos = maxPos = 0;
// for(i = 0; i < A.length; i++) {
//     B[B.length] = A[i];

//     if (A[i] < min) {
//         min = A[i];
//         minPos = i;
//     }

//      if (A[i] > max) {
//         max = A[i];
//         maxPos = i;
//     }
// }

// console.log('minPos' + minPos);
// console.log('maxPos' + maxPos);
// B.splice(minPos, 1);
// B.splice((maxPos-1), 1);

// console.log('A ' + A);
// console.log('B ' + B);



// // -----------Task_3_change min/max--------------

// A = [23,1,2,52,5,34,27,6,246,436];
// min = max = A[0];
// minPos = maxPos = 0;

// for(i = 0; i < A.length; i++) {

//     if (A[i] < min) {
//         min = A[i];
//         minPos = i;
//         }    


//     if (A[i] > max) {
//         max = A[i];
//         maxPos = i;
//         }

//  }

// console.log('minPos: ' + minPos);
// console.log('maxPos: ' + maxPos);

// [A[minPos], A[maxPos]] = [A[maxPos], A[minPos]];

// console.log(A);


// //-------------Task_4_ reverse-------------
// arr = [1, 5, 6, 2, 4];

// for (i = arr.length-1; i >= 0; i--) {
//     document.write(arr[i] + ' ');
// }


// //-------Task_5_--------

// A = [23,1,2,52,5,34,27,6,246,436];

// min = A[1];
// count = 0;
// for(i = 0; i < A.length; i++) {

//     if (A[i] < min) {
//         min = A[i];
//     }
    

//     if (A[i] >= min + 5){
//         count = count + 1;
//         console.log(A[i])
//     }
  
// }

// console.log('min value: ' + min);
// console.log('sought value: ' + (min + 5));
// console.log('count value: ' + count);

