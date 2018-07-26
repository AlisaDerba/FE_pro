// //------Task_1--------

// var word = '';
// function inArray(word, obj){
//     for (var key in obj){
//         if(obj[key] === word){
//            var ourValue = obj[key];
//         }
//     }

//     if (ourValue === word){
//         return true;
//     }else{
//         return false;
//     }
// }
    


// console.log (inArray('hello', ['svnj', 'hello', 'cvpoq']));

// //------Task_2--------

// function assignObjects(obj1, obj2){
//     var newObj = {};

//     for (key1 in obj1){
//         console.log(obj1[key1]);
//         newObj[key1] = obj1[key1];
//     }
//     for(key2 in obj2){
//         console.log(obj2[key2]);
//         if (typeof obj2[key2] == obj1[key1] ){
//             obj1[key1] = obj2[key2];
//         }
//         newObj[key2] = obj2[key2];
//     }
// return newObj;
// }

// console.log(assignObjects({ x: 10, z: 40 }, { x: 20, y: 30 }));



// //------Task_3--------

// function assignObjects(obj1, obj2, flag){
//     var newObj = {};

//     if(flag == true){
//     for (key1 in obj1){
//         console.log(obj1[key1]);
//         newObj[key1] = obj1[key1];
//         }
//     }

//     if(flag == false){
//     for(key2 in obj2){
//         console.log(obj2[key2]);
//         if(flag == false){
//             newObj[key2] = obj2[key2];
//         }
//     }
// }

// return newObj;
// }

// console.log(assignObjects({ x: 10, z: 40 }, { x: 20, y: 30 }, true));



// //------Task_4--------

// function assignObjects(obj1, obj2, flag){
//     var newObj = {};

//     if(flag == true){
//     for (key1 in obj1){
//         console.log(obj1[key1]);
//         newObj[key1] = obj1[key1];
//         }
//     }

//     if (typeof flag == 'undefined'){
//         flag = false;
//     }

//     if(flag == false){
//     for(key2 in obj2){
//         console.log(obj2[key2]);
//         if(flag == false){
//             newObj[key2] = obj2[key2];
//         }
//     }
// }
   

// return newObj;
// }

// console.log(assignObjects({ x: 10, z: 40 }, { x: 20, y: 30 }));


//------Task_5_Lection-task--------

A = [1,2,3,4,5];

function map(arr, fn){
    return function(callback){
        if (array && callback) {

            return callback(arr);

        } if (arr && !callback) {

            return arr;
        }
    }
}

function sqrt(arr){
    newArr = [];

    for(var i = 0; i < arr.length; i++){
    arr[i] *= arr[i];
    newArr[i] = arr[i];
    }

    return newArr;
}

console.log(A);
console.log(sqrt(A));