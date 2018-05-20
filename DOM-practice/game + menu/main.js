function jumping() {
    jump(block);
}

function sitting() {
    sit(block);
}

function changingColor() {
    changeColor(block);
}

window.onload = function(){

//----------Block-----------------

    var block = document.querySelector('.block')  
    document.addEventListener('keydown', action);
    var h = 200;
	window.block = block;

//------Jump-------
    
    function action(event) {     
            jump(block, event);
    }

    function jump(block, event) {
            block.style.top = block.offsetTop - h + 'px';
            setTimeout(function(){
            block.style.top = block.offsetTop + h + 'px';},200)
	}
	     
	window.jump = jump;
	
//------Sit-------

    function sit(block) {
        if( block.clientHeight === 100) {
            block.classList.add('sit');
            block.style.top = block.offsetTop + 40 + 'px';
        }
		
		document.addEventListener('mouseup', stand);
        function stand() {
                if(block.clientHeight < 100){
                    block.style.top = block.offsetTop - 40 + 'px';
                    block.classList.remove('sit');  
                }   
        }
    }   
	window.sit = sit;
	
//------Color-------
    function changeColor (block) {
    	block.style.backgroundColor = "#" + (Math.floor(Math.random()*999));
	}

    window.changeColor = changeColor;

//----------Context-menu-----------------

	var menu = document.querySelector('.menu'); 
	document.addEventListener('contextmenu', openMenu);

	
    var contextmenu = {
        actions:[
            {
                title: "Jump",
                handler: 'jumping'
            },
                {title: "Sit",
                handler: 'sitting'
            },
            {
                title: "Change color",
                handler: 'changingColor'
            }
        ]
    }


var arr = contextmenu.actions;
    
for(i = 0; i < arr.length; i++){
	
	var div = document.createElement('div');
    div.classList.add('inneritem');
	div.innerHTML = arr[i].title;
	menu.appendChild(div);
    div.onmousedown = window[arr[i].handler];	
	
}

    function openMenu(event) {
        event.preventDefault();
		menu.classList.add('show');
		
        if(event.pageY + menu.offsetHeight < window.innerHeight){
            menu.style.top = event.pageY + 'px';
        }else{
            menu.style.top = event.pageY - menu.offsetHeight + 'px';
		}
		
        if(event.pageX + menu.offsetWidth > window.innerWidth) {
            menu.style.left = event.pageX - menu.offsetWidth + 'px';
        }else{
            menu.style.left = event.pageX + 'px';
		}
		
        document.addEventListener('mousedown', closeMenu);
    }

    function closeMenu() {
        menu.classList.remove('show');
    }

   

}