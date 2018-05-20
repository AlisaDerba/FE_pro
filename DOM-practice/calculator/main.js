// window.onload = function(){
    
// var block = document.querySelector('.block');
// var x;
// var y;

// block.addEventListener('mousedown', startAction);

// function startAction(event){
//    x = event.offsetX;
//    y = event.offsetY;
//   document.addEventListener('mousemove', changePosition);
// }

//   function changePosition(event){

//     block.style.left = event.pageX - x + 'px'; 
//     block.style.top = event.pageY - y + 'px';
 
// } 
    
// document.addEventListener('mouseup', stopAction);

//     function stopAction(){
//         document.removeEventListener('mousemove', changePosition);
//     }

// }

window.onload = function(){

    var block = document.querySelector('block');
    var step = (20 + 'px');
    var h = (100 + 'px');

    block.addEventListener('keydown', move);

    var move = document.body.onkeydown = function() {
        var e = event.keyCode
    
            if (e == 40) { //down function
                block.style.top = (parseInt(block.style.top)) + step;
            } else if (e == 37) { //left function
                block.style.left = (parseInt(block.style.left)) - step;
            } else if (e == 39) { //right function
                block.style.left = (parseInt(block.style.left)) + step;
            } else if (e == 38) { //up function
                block.style.top = (parseInt(block.style.top)) - step;
            }
        
        }

}