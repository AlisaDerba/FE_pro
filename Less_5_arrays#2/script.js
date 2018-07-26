//-------Task 1------

A = [1,2,3,4,5,6,7];

if ( A % 2==0 ){
    for ( i = 0 ; i < A.length ; i++ ) {
    z = A[i];
    A[i] = A[i+=1];
    A[i] = z;
}
} else {
    for ( i = 0 ; i < A.length-1 ; i++ ) {
    z = A[i];
    A[i] = A[i+=1];
    A[i] = z;
}
document.write(A);
}

// //---------Task 2----------

// n = 3;
// m = 3;
// A = new Array(n);

// for(i = 0; i < A.length; i++){
//     A[i] = new Array(m);
// }

// // --- fill_array---
// for(i = 0; i < A.length; i++){
//     for(j = 0; j < A[i].length; j++){
//         A[i][j] = Math.floor(Math.random()*90) + 10;
//         document.write(A[i][j] + ' ');
//     }
//     document.write('<br />');
// }
// //----Task----

// //-----Max_Sum------
// maxSum = 0;
// maxRow = 0;

// for(i = 0; i < n; i++){
//     sum = 0;

//     for(j = 0; j < m; j++){
//         sum = sum + A[i][j];

//         if(sum > maxSum){
//             maxSum = sum;
//             maxRow = i;
//         }
//     }
    
// }
// console.log('maxSum = ' + maxSum);
// console.log('maxRow = ' + maxRow);

// //----Min_Sum----


// minRow = 0;
// sum = 0;

// for (j = 0; j < n; j++){
//     sum = sum + A[0][j];
//     minSum = sum;   
// }

// for (i = 1; i < n; i++){
//     sum = 0;
//     for(j = 0; j < m; j++){
//         sum = sum + A[i][j];
//     }

//     if(sum < minSum){
//         minSum = sum;
//         minRow = i;
//     }
// }

// console.log('minSum = ' + minSum);
// console.log('minRow = ' + minRow);

// // ---Swap---

// z = A[minRow];
// A[minRow] = A[maxRow];
// A[maxRow] = z;

// console.log('maxRow = ' + maxRow);
// console.log('minRow = ' + minRow);

// console.log (A);

