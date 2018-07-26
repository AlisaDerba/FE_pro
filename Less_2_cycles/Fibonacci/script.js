// var n = +prompt('Enter your value');
    
// function fib(n) {

//     if(isNaN(n)){
//         alert('Put the right value');
//         location.reload();
//         }

//     else if ( n == 0 ){
//             return 0;}

//         else if(n == 1){ 
//                 return 1;}
//     else{

//     return fib(n-2) + fib(n-1)}
//  }

//  document.write (fib(n));



n = 3; // number
a = 0; // previous_1
b = 1; // previus_2

next = 1;

    for(var i = 2; i <= n; i++) {
        next = a + b;
        a = b;
        b = next;}

console.log(next);


