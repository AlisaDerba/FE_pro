window.onload = function() {
    
        var inputs = document.querySelectorAll('.input');
        var textarea = document.querySelector('.textfield');
        var i = 0;
        //console.log(inputs)

        var arr = new Array(inputs.length);

        setInterval(function(){
            if (i == inputs.length){
                i = 0;
            }
               
            if(arr[i] !== inputs[i].value) {
               arr[i] = inputs[i].value;
            }

            i++;
            
            textarea.value = arr;

       }, 500);
} 




      


