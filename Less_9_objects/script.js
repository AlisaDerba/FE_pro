
//-----task_1-----

var obj = {
    doFunction: mathOperation,
    clear: clearFunction,
    copy: copyFunction
} 

//---mathOperation_value

function mathOperation(x, y, operator){
    var result = operator(x, y);
    console.log (result);  
    return this;
}

function sum(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

//---clearFunction_value

function clearFunction(){
    result = 0;
    console.log (result);
    return this;
}

//---copyFunction_value
function copyFunction(buffer) {
    if (typeof buffer == 'string'){
     return this.word = buffer;
    }
}



console.log(obj);
console.log(obj.doFunction(2, 11, sum).doFunction(5, 8, mul).clear().doFunction(2, 11, mul).copy('Hello!'));

// //-----Task_2-----

// function concat(text) {

//    var textSplit = text.split('_');
//    var result = '';

//    for (var i = 0; i < textSplit.length; i++) {
//        for ( var j = 0 ; j < textSplit[i].length; j++) {
//            if(i > 0 && j == 0){
//                result += textSplit[i][j].toUpperCase();
//            }else{
//                result += textSplit[i][j];
//            }
//        }
//    }

//     return result;
// }

// console.log(concat('var_text_hello'));

// //------Task_3--------

// function inArray(word, arr){
//     for (i = 0; i < arr.length; i++){
//             if(arr[i] === word || arr[i].indexOf(word)){
//                 return true;
//                 }else{
//                     return false;
//                 }
//             }

//         }


// console.log(inArray('foo', ['sjhfnaof', 'ffooasf', 'dfhdfhdfh']));