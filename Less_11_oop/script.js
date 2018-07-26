// //-----Task_1-----


// //--------1_LEVEL----------
// function Firstlevel (x){
//     this.x = x;
// }

// Firstlevel.prototype.render = function(x){
//     return this.x = x;
// }

// Firstlevel.prototype.clear = function(){
//     return this.x = 0;
// }

// var obj = new Firstlevel(6)

// //--------2_LEVEL----------

// function Secondlevel(x, y){
//     this.x = x;
//     this.y = y;
// }

// Secondlevel.prototype = Object.create(Firstlevel.prototype)

// Secondlevel.prototype.sum = function(x, y){
//     this.res = (x + y) * (x + y);
//     return this.res;
// }

// Secondlevel.prototype.mul = function(x, y){
//     this.res = (x * y) * (x * y);
//     return this.res;
// }

// Secondlevel.prototype.div = function(x, y){
//     this.res = (x / y) * (x / y);
//     return this.res;
// }

// Secondlevel.prototype.setValue = function() {
//     return this.render(this.res);
// }

// var sl = new Secondlevel(2, 3);

// //--------3_LEVEL----------



// function Thirdlevel(arr){
//     this.n = 200;
//     this.arr = new Array (n);
// }

// Thirdlevel.prototype = new Secondlevel();

// Thirdlevel.prototype.reInit = function(){

//     for (i = 0; i < n; i++){
//         arr[i] = Math.floor(Math.random()*50+1);
//     }
//     this.arr = arr;
// }

// tl = new Thirdlevel();

// //--------4_LEVEL----------

// function Fourthlevel(){}
// Fourthlevel.prototype = Object.create(Thirdlevel.prototype);

// var fl = new Fourthlevel();



// // //----Task_2-----

// function SuperMath (x, y, znak){   
//         this.x = x;
//         this.y = y;
//         this. znak = znak;
//         this.check();
// }

// SuperMath.prototype.check = function(obj){
    
//     if (confirm('Do you want to put this ZNAK for ' + this.x + ' & ' + this.y + '?')){
//         if (this.znak == '+'){
//         return console.log(this.res = this.x + this.y);

//         }else if(this.znak == '*'){
//             return console.log(this.res = this.x * this.y);

//         }else if(this.znak == '/'){
//             return console.log(this.res = this.x / this.y);

//         }else if (this.znak == '%'){
//             return console.log(this.res = this.x % this.y);
//         }
//     }else{
//         return this.input();
//     }
// }

// SuperMath.prototype.input = function(obj){
//     alert('In this case put your values to the field');
    
//     this.x = +prompt('Put X value');
//     this.y = +prompt('Put Y value');
//     do {
//         this.znak = prompt('Put your ZNAK');
//     } while(this.znak != '+' && this.znak !== '/' && this.znak !== '*' && this.znak !== '%' );
   
    
//    if (this.znak == '+'){
//         return console.log(this.res = this.x + this.y);

//     }else if(this.znak == '*'){
//         return console.log(this.res = this.x * this.y);

//     }else if(this.znak == '/'){
//         return console.log(this.res = this.x / this.y);

//     }else if (this.znak == '%'){
//         return console.log(this.res = this.x % this.y);
//     } 
// }
    
// sm = new SuperMath(2, 3, '+');





//----Material_practice--------

// //******SuperArray_creation******

// function SuperArray (n, m, options){

//     var arr = new Array(n);
    
//     for (var i = 0; i < arr.length; i++){
//        arr[i] = new Array(m);
//     }

//     for (var i = 0; i < arr.length; i++){
//         for(var j = 0; j < arr[i].length; j++ ){
//             arr[i][j] = Math.floor(Math.random()*(options.max - options.min + 1) + options.min);
//         }
//     }
  
//     this.arr = arr;
// }

// //******SuperArray_render******
 
// SuperArray.prototype.render = function (separator){
     
//     separator = separator || '*';
     
//      for (var i = 0; i < this.arr.length; i++){

//          for (var j = 0; j < this.arr[i].length; j++){
//             document.write(this.arr[i][j] + ' ' + ' ' + '');
//         }

//             document.write('<br />' + '<br />');
//     }

//     for (var i = 0; i < this.arr[0].length; i++){
//         document.write (separator + ' ');
//     }
         
//         document.write('<br />');
// }


// var z = new SuperArray(10, 10, {max: 9, min: 0});
// z.render();

// //******SuperArray_clear******

// SuperArray.prototype.clear = function(direction, k){
    
//     if (direction == 'row'){
//         for (i = 0; i < this.arr[0].length; i++){
//             this.arr[k - 1][i] = 0;
//         }

//     }else{
//         for (j = 0; j < this.arr.length; j++ ){
//             this.arr[j][k - 1] = 0;
//         }
//     }

//     this.render();
// }

// // z.clear('row', 2);

// //******SuperArray_setMarker******

// SuperArray.prototype.setMarker = function(coord){

    
//     this.marker = this.arr[coord.x][coord.y];
//     this.arr[coord.x][coord.y] = '&';
    
//     this.bufferX = coord.x;
//     this.bufferY = coord.y;

//     this.render();
// }

// //******SuperArray_goTo******

// SuperArray.prototype.goTo = function(coord) {
        
// this.arr[this.bufferX][this.bufferY] = this.marker;
// this.arr[coord.x][coord.y] = '&';

// this.bufferX = coord.x;
// this.bufferY = coord.y;


// this.render();

// }

// //******SuperArray_shift******
    
// SuperArray.prototype.shift = function(direction){
    
//     if (direction == 'left'){

//         this.arr [this.bufferX][this.bufferY] = this.marker;
//         this.marker = this.arr[this.bufferX][this.bufferY - 1];
//         this.arr[this.bufferX][this.bufferY - 1] = '&';
//         this.bufferY = this.bufferY - 1;
//     }

//     if (direction == 'right'){
//         this.arr[this.bufferX][this.bufferY] = this.marker;
//         this.marker = this.arr[this.bufferX][this.bufferY + 1];
//         this.arr[this.bufferX][this.bufferY + 1] = '&';
//         this.bufferY = this.bufferY + 1;
//     }

//     if (direction == 'top'){

//         this.arr[this.bufferX][this.bufferY] = this.marker;
//         this.marker = this.arr[this.bufferX - 1][this.bufferY];
//         this.arr[this.bufferX - 1][this.bufferY] = '&';
//         this.bufferX = this.bufferX - 1;
//     }

//     if (direction == 'bottom'){
        
//         this.arr[this.bufferX][this.bufferY] = this.marker;
//         this.marker = this.arr[this.bufferX + 1][this.bufferY];
//         this.arr[this.bufferX + 1][this.bufferY] = '&';
//         this.bufferX = this.bufferX + 1;
//     }

//     this.render();
// }   




//----HERO_GAME--------

//******Field_class_creation******

function Field(x, y){
    this.x = x;
    this.y = y;

    var arr = new Array(this.y);
    
    for (var i = 0; i < this.y; i++){
       arr[i] = new Array(this.x);
    }

    for (var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++ ){
            arr[i][j] = 0;
        }
    }
  
    this.arr = arr;
}

var f = new Field(10, 10);


// //******Field_render******
 
Field.prototype.renderField = function (){
    
    document.write('<hr />' + '<br />');

     for (var i = 0; i < this.arr.length; i++){

         for (var j = 0; j < this.arr[i].length; j++){
            document.write(this.arr[i][j] + ' ' + ' ' + ' ' + ' ' + ' ' + ' ');
        }

            document.write('<br />' + '<br />');
    }

    for (var i = 0; i < this.arr[0].length; i++){
        document.write (' ');
    }
         
        document.write('<hr />');
}

f.renderField();


//******Field_clearField******

Field.prototype.clearField = function () {
    for (var i = 0; i < this.arr.length; i++) {
        for(var j = 0; j < this.arr[i].length; j++) {
            this.arr[i][j] = 0;
        }
    }
    this.renderField();
}

//******Field_changeSize******

Field.prototype.changeSize = function(newX, newY) {
    
    this.x = newX;
    this.y = newY;
    
    var arr = new Array(this.y)
        for (var i = 0; i < this.y; i++) {
            arr[i] = new Array(this.x);
        }
        for (i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                arr[i][j] = 0;
            }
        }
    this.arr = arr;
    this.renderField()
}


//******Person_class_creation******

function Person(hero, coordX, coordY) {
    
    this.hero  = hero;

    this.coordX = coordX - 1;
    this.coordY = coordY - 1 ;
}


//******Person_proto_creation******

Person.prototype = Object.create(Field.prototype)

//******Person_start******

Person.prototype.start = function(x, y){
    this.coordX = x - 1;
    this.coordY = y - 1;
    f.arr[this.coordX][this.coordY] = 1;
    f.renderField();

}

var p = new Person('Alice');


//******Person_go******

    Person.prototype.go = function (direction, step) {
        
        if(direction == 'left') {
            if(this.coordY - step <= 0) {
                f.arr[this.coordX][this.coordY] = 0;
                this.coordY = f.x - (step - this.coordY);
                if (this.coordX == f.x){
                this.coordX = f.x - 1;
                }
                f.arr[this.coordX][this.coordY] = 1;
            }else {
                f.arr[this.coordX][this.coordY - step] = 1;
                f.arr[this.coordX][this.coordY] = 0;
                this.coordY = this.coordY - step;
            }
          
        }

    if(direction == 'right') {

       if(this.coordY + step >= f.x) {
            f.arr[this.coordX][this.coordY] = 0;
            this.coordY = step - (f.x - this.coordY)
            f.arr[this.coordX][this.coordY] = 1;

        }else{
            f.arr[this.coordX][this.coordY + step] = 1;
            field.arr[this.coordX][this.coordY] = 0;
            this.coordY = this.coordY + step;
        }
       

    }

    if(direction == 'top') {
        if(this.coordX - step <= 0) {
            f.arr[this.coordX][this.coordY] = 0;
            this.coordX = f.y - (step - this.coordX);
            f.arr[this.coordX][this.coordY] = 1;
        }else {    
            f.arr[this.coordX - step][this.coordY] = 1;
            f.arr[this.coordX][this.coordY] = 0;
            this.coordX = this.coordX - step;
        }
        
    }

    if(direction == 'bottom') {
        if(this.coordX + step >= f.y) {
            f.arr[this.coordX][this.coordY] = 0;
             this.coordX = step - (f.y - this.coordX)
             f.arr[this.coordX][this.coordY] = 1;
            } else {
            f.arr[this.coordX + step][this.coordY] = 1;
            f.arr[this.coordX][this.coordY] = 0;
            this.coordX = this.coordX + step;
                }   
            }
        
    f.renderField()
}



//******Person_resetPosition******

Person.prototype.resetPosition = function() {
    
    f.arr[this.coordX][this.coordY] = 0;
    
    this.coordX = 0;
    this.coordY = 0;
    
    f.arr[this.coordX][this.coordY] = 1;

    f.renderField();

}