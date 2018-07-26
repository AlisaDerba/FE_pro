window.onload = function() {

	var block = document.querySelector('.block') 	
	document.addEventListener('keydown', action);
	

	var step = 40;
	var h = 200;
	var direction = 1;
	buffer = 40 + 'px';
	

	function action(event){
		
		if(event.key == 'Control') {
			sit(block, event);
		}
		if(event.key == ' ') {
			jump(block, event);
		}else {
			moveDirection(block, event);
		}	
	}
	
	//------Sit down--------
	
	function sitEvent(event){
		return sit();
	}

	function sit(){ 
		if (block.clientHeight === 100 && event.ctrlKey) {
			block.style.top = block.offsetTop + 40 + 'px';
			block.classList.add('sit');
		}
	}

	//--------Stand up--------

	document.addEventListener('keyup', standEvent);
	
	function standEvent(event){		
		return stand();		
	}

	function stand() {
		if (block.clientHeight === 60 && !event.ctrlKey) {
			block.style.top = block.offsetTop - 40 + 'px';
			block.classList.remove('sit');
		}
	}

   //------Jump event--------

   function jump(block, event) {
	if (!event.ctrlKey  && block.offsetTop >= 0) {
		block.style.top = block.offsetTop - h + 'px';
		setTimeout(function(){
		block.style.top = block.offsetTop + h + 'px';},200);
	}
}

	//-----Move direction (arrows)-----
	
	function moveDirection(block, event) {
		
		if (event.key === 'ArrowLeft' &&  block.offsetLeft >= 0) {
            block.style.left = block.offsetLeft - step + 'px';
		}
		
		if (event.key === 'ArrowRight' &&  block.offsetLeft + block.offsetWidth <= window.innerWidth) {
            block.style.left = block.offsetLeft + step + 'px';
		}
		
		if (event.key === 'ArrowUp' && !event.ctrlKey && block.offsetTop >= 0) {
            block.style.top = block.offsetTop - step + 'px';
		}
		
		if (event.key === 'ArrowDown' && !event.ctrlKey && block.offsetTop + block.offsetHeight < window.innerHeight) {
            block.style.top = block.offsetTop + step + 'px';
		}
		

	}

}