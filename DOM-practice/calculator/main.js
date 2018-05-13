window.onload = function(){
    
    //--------Accessing_elements---------
    
    var range = document.querySelector('.range');
	var number = document.querySelector('.number');
    var green = document.querySelector('.green');
	var red = document.querySelector('.red');
    
    //--------Putting_events---------

    number.addEventListener('click', putNumber);
    range.addEventListener('mousemove', putRange);

    //--------Range_function---------

	function putRange(){
	number.value = range.value;

    green.style.height = range.value + 'px';
    
    red.style.bottom = green.style.height;
    red.style.height = comission(range.value) + 'px';
    
	}

     //--------Number_function---------

	function putNumber() {
        range.value = number.value;
        
        green.style.height = number.value + 'px';
        
        red.style.bottom = green.style.height;
        red.style.height = comission(range.value) + 'px';
	}
    
    //--------Comission_function---------

	function comission (range){
    if (range < 20) {
        return range*.02;
    }
    if (range >= 20 && range < 50) {
        return range*.04;
    }
    if (range >= 50 && range < 75) {
        return range*.06;
    }
    if (range >= 75 && range <= 100) {
        return range*.08
    }

}
}