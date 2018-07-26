 do {
    a = +prompt('Put the first value:');
 } while(isNaN(a));

 do {
    b = +prompt('Put the last value:');
 } while(isNaN(b));

 do {
    h = +prompt('Put the interval:');
 } while(isNaN(h));

sum = 0;

for(var n = a; n <= b; n += h){
 
    res = 1;    
 
    for (r = 1; r <= n ; r++ ){
        res= res*r;    
    }   
       document.write('Factorial of ' + n + ' = ' + res + '</br>');

       if(n <= b){
           sum += res;
       }
}

document.write('SUM OF FACTORIALS = ' + sum + '</br>');





