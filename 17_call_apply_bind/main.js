//-----lection_practice

var obj = {
    id: '',
    name: 'fooo',
    value: 10
}

var myMethods = {
        setValueByProp: function(prop, value){
            this[prop] = value;
        },

        getValuesByType: function(type){
            for(var key in this) {
                if(key == type)
                return this[key];
            }
        } 
    }

var resultByType =  myMethods.getValuesByType.call(obj, 'age');
console.log(resultByType);

// var res = myMehods.setValueByProp.call(obj, 'id', 'BLABLA');
// console.log (res);

// myMehods.setValueByProp.call(obj, 'value', [1,78,3,4,9]);



//-----------task_1-------------

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

var pluck = function(arr, key) { 
   return arr.map(function(item){ 
        return item[key]; 
    }) 
}

console.log(pluck(characters, 'age'));



//-----------task_2-------------

//...........Var-1

var input = [1, 2, 3, 4, 5, 6];

function filter(arr, func) {
    var res = [];
  
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      
      if (func(item)) {
        res.push(item);
      }
    }
  
    return res;
  }

  function isEven(x) {
    return x % 2 == 0;
  }

console.log(filter(input, isEven));
  
//...........Var-2

var input = [1, 2, 3, 4, 5, 6];

var resArr = input.filter(function isEven(item, pos, source){
    
    if( item % 2 == 0){
        return item;
}

});

console.log(resArr);
console.log(input); 

//...........Var-3

var input = [1, 2, 3, 4, 5, 6];
function isEven(x){ return x % 2 == 0;} 
    
    function filter(arr, fn) {
        return arr.filter(function(item){
                return isEven(item);
        })
    }

console.log(filter(input, isEven));


//-----------task_3-------------

var obj = {
    title1: '111',
    title2: '222',
    title3: '333',  
    title4: '444'
}

Object.prototype.count = function(){
    res = 0;
  
    for(var key in this) {

      if(this.hasOwnProperty(key)){
        res++;
      }

    }
    return res;
}

console.log(obj.count());