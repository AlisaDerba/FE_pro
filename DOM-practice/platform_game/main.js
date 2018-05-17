window.onload = function(){
    
var block = document.querySelector('.block');
var x;
var y;

block.addEventListener('mousedown', startAction);

function startAction(event){
   x = event.offsetX;
   y = event.offsetY;
  document.addEventListener('mousemove', changePosition);
}

  function changePosition(event){

    block.style.left = event.pageX - x + 'px'; 
    block.style.top = event.pageY - y + 'px';
 
} 
    
document.addEventListener('mouseup', stopAction);

    function stopAction(){
        document.removeEventListener('mousemove', changePosition);
    }

}
