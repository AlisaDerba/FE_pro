window.onload = function() {

	var block = document.querySelector('.block') 	
	document.addEventListener('keydown', action);
	document.addEventListener('keyup', sit);
	console.dir(block);

	var step = 40;
	var h = 100;
	var direction = 1;
	budder = 2 + 'px';
	

	function action(event){
		// console.log(event);
		//console.dir(window)

		if(event.key == 'ArrowLeft' && block.offsetLeft >= 0) {
			block.style.left = block.offsetLeft - step + 'px';
		}

		if(event.key == 'ArrowRight' &&  block.offsetLeft + block.offsetWidth <= window.innerWidth) {
			block.style.left = block.offsetLeft + step + 'px';
		}
		
		if(event.key == 'ArrowUp' && !event.ctrlKey && block.offsetTop >= 0) {
			block.style.top = block.offsetTop - step + 'px';
		}

		if(event.key == 'ArrowDown' && !event.ctrlKey && block.offsetTop + block.offsetHeight <= window.innerHeight ) {
			block.style.top = block.offsetTop + step + 'px';
		}
	    if(event.key == ' ' && !event.ctrlKey) {
		var timer = setInterval(jump, 45);
		}

		var up = block.offsetTop - h;

	    function jump() {

			if((block.offsetTop <= up)) {
				direction = -direction;
		   }

			 block.style.top = block.offsetTop - (step * direction) + 'px';

			
			if(block.offsetTop == up + h){
				 direction = -direction;
				clearInterval(timer)
			}

		}
	
		if(event.key == 'Control') {
			
			block.style.height = block.clientHeight *.6 + 'px';
			block.style.width = block.clientWidth * 1.15 + 'px';
			
		}
		
		
	}


function sit(event){

	if(event.key == 'Control') {
			
		block.style.height = 100 + 'px';
		block.style.width = 100 + 'px';
		
		}
	}
}